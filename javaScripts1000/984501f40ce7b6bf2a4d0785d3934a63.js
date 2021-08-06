var lead_capture_initialted = false;
var longitude = null;
var latitude = null;
var agent_location ='Location not shared'
var agent_name = null
var easyassist_tickmarks_clicked=new Array(11).fill(false);
var is_recursive_call_ended = true;
var is_all_nodes_visited_for_first_time = false;
var document_readystate_interval = null;

window.EASYASSIST_HTML_ID_TO_REMOVE = [
    "easyassist-customer-feedback-modal-content",
    "easyassist-agent-information-modal",
    "easyassist-livechat-iframe",
    "easyassist-sidenav-menu-id",
    "easyassist-ripple_effect",
    "easyassist-co-browsing-modal-id",
    "easyassist-product-category-modal-id",
    "easychat_share_link_Model",
    "easyassist-side-nav-options-co-browsing",
    "easyassist-co-browsing-request-assist-modal",
    "easyassist-co-browsing-request-meeting-modal",
    "easyassist-voip-video-calling-request-modal",
    "easyassist-voip-calling-request-modal",
    "easyassist_agent_joining_modal",
    "agent-mouse-pointer",
    "easyassist-snackbar",
    "easyassist-iframe",
    "easyassist-co-browsing-feedback-modal",
    "easyassist-conection-modal-id",
    "easyassist-co-browsing-request-edit-access",
    "easyassist-co-browsing-payment-consent-modal",
    "easyassist-tooltip",
    "cobrowse-mobile-modal",
    "easyassist-cobrowse-voip-container",
];

if (window.EASYASSIST_COBROWSE_META.allow_popup_on_browser_leave == true) {
    document.addEventListener("mouseout", function(e) {
        if ((e.clientY < 0 || e.clientX < 0) && (get_easyassist_cookie("easyassist_session_id") == undefined) && get_easyassist_cookie("page_leave_status") == "None") {
            if(easyassist_time_to_show_support_button() == true) {
                easyassist_check_agent_available_status(easyassist_show_cobrowsing_modal);    
                if(EASYASSIST_COBROWSE_META.enable_recursive_browser_leave_popup == false) {
                    set_easyassist_cookie("page_leave_status", "true");
                }
            }
        }
    }, false);
}

/***************** EasyAssist Custom Select ***********************/

class EasyassistCustomSelect {
    constructor(selector, placeholder, background_color) {
        this.placeholder = placeholder;
        background_color = background_color;

        var select_element = document.querySelector(selector);
        var selected_list_class = "easyassist-option-selected";
        var show_option_container_class = "easyassist-dropdown-show";
        var custom_dropdown_selected_option = "";
        var dropdown_option_selected = false;

        var custom_dropdown_wrapper = "";
        var custom_dropdown_option_container = "";
        var custom_dropdown_options = "";
        var custom_dropdown_selected_option_wrapper = "";

        // Create elements
        custom_dropdown_wrapper = create_element('div', 'easyassist-custom-dropdown-container');
        custom_dropdown_option_container = create_element('ul', 'easyassist-custom-dropdown-option-container');
        custom_dropdown_selected_option_wrapper = create_element('div', 'easyassist-dropdown-selected');
        // select_element.wrap(custom_dropdown_wrapper);
        select_element.style.display = "none";

        select_element.parentNode.insertBefore(custom_dropdown_wrapper, select_element);
        custom_dropdown_wrapper.appendChild(select_element)

        for(var idx = 0; idx < select_element.children.length; idx ++) {
            let option_el = select_element.children[idx];
            let option_text = option_el.text.trim();
            let option_value = option_el.value;

            if(option_el.selected) {
                dropdown_option_selected = true;
                custom_dropdown_selected_option = option_text;
                custom_dropdown_options += [
                    '<li  class="' + selected_list_class + '">',
                        '<span>' + option_text + '</span>',
                        '<input type="hidden" value="' + option_value + '">',
                    '</li>',
                ].join('');
            } else {
                custom_dropdown_options += [
                    '<li>',
                        '<span>' + option_text + '</span>',
                        '<input type="hidden" value="' + option_value + '">',
                    '</li>',
                ].join('');
            }
        }

        custom_dropdown_option_container.innerHTML = custom_dropdown_options;
        select_element.insertAdjacentElement('afterend', custom_dropdown_option_container)

        if(dropdown_option_selected) {
            custom_dropdown_selected_option_wrapper.innerHTML = custom_dropdown_selected_option;
        } else if(this.placeholder) { 
            custom_dropdown_selected_option_wrapper.innerHTML = this.placeholder;
        } else {
            custom_dropdown_selected_option_wrapper.innerHTML = custom_dropdown_selected_option;
        }

        select_element.insertAdjacentElement('afterend', custom_dropdown_selected_option_wrapper);

        // Add eventlistener
        document.addEventListener('click', function(e) {
            if(e.target == custom_dropdown_selected_option_wrapper) {
                custom_dropdown_option_container.classList.toggle(show_option_container_class);
            } else {
                custom_dropdown_option_container.classList.remove(show_option_container_class);
            }
        });

        for(let idx = 0; idx < custom_dropdown_option_container.children.length; idx ++) {
            let li_element = custom_dropdown_option_container.children[idx];
            li_element.addEventListener('click', function(e) {
                let selected_option_text = this.innerHTML;
                reset_dropdown();
                li_element.classList.add(selected_list_class);
                li_element.style.setProperty('background-color', background_color, 'important');
                custom_dropdown_selected_option_wrapper.innerHTML = selected_option_text;
                custom_dropdown_option_container.classList.toggle(show_option_container_class);

                // Update selecte drodown
                let option_value = li_element.children[1].value;
                select_element.value = option_value;
                var change_event = new Event('change');
                select_element.dispatchEvent(change_event);
            });

            li_element.addEventListener('mouseover', function(e) {
                li_element.style.setProperty('background-color', background_color, 'important');
            });

            li_element.addEventListener('mouseout', function(e) {
                if(!li_element.classList.contains(selected_list_class)) {
                    li_element.style.removeProperty('background-color');
                }
            })
        }

        function reset_dropdown() {
            for(let idx = 0; idx < custom_dropdown_option_container.children.length; idx ++) {
                custom_dropdown_option_container.children[idx].classList.remove(selected_list_class);
                custom_dropdown_option_container.children[idx].style.removeProperty('background-color');
            }
        }

        function create_element(html_tag, css_class) {
            let html_element = document.createElement(html_tag);
            html_element.className = css_class;
            return html_element;
        }
    }
}

function easyassist_find_light_color(color, percent) {
    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

function easyassist_show_tooltip(el) {
    el.querySelector('label').style.display = "inline-block";
}

function easyassist_hide_tooltip(el) {
    el.querySelector('label').style.display = "none";
}

function add_easyassist_event_listner_into_element(html_element, event_type, target_function){
    html_element.removeEventListener(event_type, target_function);
    html_element.addEventListener(event_type, target_function);
}

function remove_easyassist_event_listner_into_element(html_element, event_type, target_function){
    html_element.removeEventListener(event_type, target_function);
}

function easyassist_convert_urls_to_absolute(nodeList) {

    if (!nodeList.length) {
        return [];
    }

    var attrName = 'href';
    if (nodeList[0].__proto__ === HTMLImageElement.prototype ||
        nodeList[0].__proto__ === HTMLScriptElement.prototype) {
        attrName = 'src';
    }

    nodeList = [].map.call(nodeList, function(el, i) {
        var attr = el.getAttribute(attrName);
        if (!attr) {
            return;
        }

        var absURL = /^(https?|data):/i.test(attr);
        if (absURL) {
            return el;
        } else {
            if(el[attrName]) {
                el.setAttribute(attrName, el[attrName]);
            }

            return el;
        }
    });
    return nodeList;
}

function easyassist_create_proxy_server_pass_urls(nodeList) {

    if (!nodeList.length) {
        return [];
    }

    var attrName = 'href';
    if (nodeList[0].__proto__ === HTMLImageElement.prototype ||
        nodeList[0].__proto__ === HTMLScriptElement.prototype) {
        attrName = 'src';
    }

    nodeList = [].map.call(nodeList, function(el, i) {
        var attr = el.getAttribute(attrName);
        if (!attr) {
            return;
        }

        var absURL = /^(https?|data):/i.test(attr);
        if (absURL) {
            if (/^(data):/i.test(attr)) {
                el.setAttribute(attrName, attr);
            } else {
                attr = EASYASSIST_COBROWSE_META.proxy_server + attr
                el.setAttribute(attrName, attr);
            }
        } else {
            el.setAttribute(attrName, EASYASSIST_COBROWSE_META.proxy_server + el[attrName]);
        }
        return el;
    });
    return nodeList;
}

function set_easyassist_cookie(cookiename, cookievalue) {

    var domain = window.location.hostname.substring(window.location.host.indexOf(".") + 1);

    if (window.location.hostname.split(".").length == 2) {
        domain = window.location.hostname;
    }

    if (window.location.protocol == "https:") {
        document.cookie = cookiename + "=" + cookievalue + ";path=/;domain=" + domain + ";secure";
    } else {
        document.cookie = cookiename + "=" + cookievalue + ";path=/;";
    }
}

function set_easyassist_cookie_with_path(cookiename, cookievalue) {

    domain = window.location.pathname;
    var date = easyassist_expire_midnight_cookie();
    if (window.location.protocol == "https:") {
        document.cookie = cookiename + "=" + cookievalue + ";expires=" + date + ";path=" + domain + ";secure";
    } else {
        document.cookie = cookiename + "=" + cookievalue + ";expires=" + date + ";path=" + domain;
    }
}

function get_easyassist_cookie(cookiename) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + cookiename.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? matches[1] : undefined;
}

function delete_easyassist_cookie(cookiename) {

    var domain = window.location.hostname.substring(window.location.host.indexOf(".") + 1);

    if (window.location.hostname.split(".").length == 2) {
        domain = window.location.hostname;
    }

    if (window.location.protocol == "https:") {
        document.cookie = cookiename + "=;path=/;domain=" + domain + ";secure;expires = Thu, 01 Jan 1970 00:00:00 GMT";
    } else {
        document.cookie = cookiename + "=;path=/;expires = Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function easyassist_expire_midnight_cookie(name, value, path)
{
    var now = new Date();
    var expire = new Date();
    expire.setFullYear(now.getFullYear());
    expire.setMonth(now.getMonth());
    expire.setDate(now.getDate()+1);
    expire.setHours(0);
    expire.setMinutes(0);
    return expire.toGMTString();
}

function easyassist_prevent_non_numeric_characters(event) {
    var blacklisted_keycode = [69, 107, 109, 187, 189];
    if(blacklisted_keycode.includes(event.keyCode)) {
        event.preventDefault();
    }
}

function easyassist_verification_input_color_change(el) {
    el.style.setProperty('border-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
    el.style.color = EASYASSIST_COBROWSE_META.floating_button_bg_color;
}

function easyassist_feedback_icon_color_change(element) {

    var rating_bar = document.getElementsByClassName("easyassist-tickmarks")[0];
    var rating_spans = rating_bar.querySelectorAll("span");

    for(var index = 0; index < rating_spans.length; index ++) {
        if(!easyassist_tickmarks_clicked[index]) {
            rating_spans[index].style.color = '#2D2D2D';
            rating_spans[index].style.background = "unset";
            rating_spans[index].style.border = "1px solid #E6E6E6";
        }
    }
}

function easyassist_time_to_show_support_button() {

    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330; // IST offset UTC +5:30
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
    // ISTTime now represents the time in IST coordinates
    var hoursIST = ISTTime.getHours()
    var minutesIST = ISTTime.getMinutes()

    var start_time = window.EASYASSIST_COBROWSE_META.start_time
    var end_time = window.EASYASSIST_COBROWSE_META.end_time

    var startHour = parseInt(start_time.substring(0, 2));
    var startMinute = parseInt(start_time.substring(3, 5));

    var endHour = parseInt(end_time.substring(0, 2));
    var endMinute = parseInt(end_time.substring(3, 5));

    if (hoursIST > startHour && hoursIST < endHour) {
        return true;
    } else if (hoursIST == startHour && hoursIST == endHour) {
        if (minutesIST >= startMinute && minutesIST <= endMinute) {
            return true;
        } else {
            return false;
        }
    } else if (hoursIST == startHour) {
        if (minutesIST >= startMinute) {
            return true;
        } else {
            return false;
        }
    } else if (hoursIST == endHour) {
        if (minutesIST <= endMinute) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function easyassist_show_emoji_on_rating_change(element, user_rating) {

    rating_spans = element.parentNode.children;
    for (var index = 0; index < rating_spans.length; index ++) {
        if (parseInt(rating_spans[index].innerHTML) <= user_rating) {
            if(index <= 6){
                rating_spans[index].style.background = 'rgba(255, 70, 70, 1)';
            } else if( index <= 8){
                rating_spans[index].style.background = 'rgba(255, 153, 0, 1)';
            } else {
                rating_spans[index].style.background = 'rgba(5, 178, 54, 1)';
            }
            rating_spans[index].style.border = "none";
            // rating_spans[index].style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
            rating_spans[index].style.color = "#fff";
        } else if(!easyassist_tickmarks_clicked[index]){
            rating_spans[index].style.border = "1px solid #E6E6E6";
            rating_spans[index].style.background = "unset";
            rating_spans[index].style.color = '#2D2D2D';

        }
    }
}

function easyassist_rate_agent(element) {
    var rating_bar = document.getElementsByClassName("easyassist-tickmarks")[0];
    var rating_spans = rating_bar.querySelectorAll("span");
    var user_rating = parseInt(element.innerHTML);

    window.EASYASSIST_CLIENT_FEEDBACK = user_rating;

    for(var index = 0; index <= user_rating; index ++) {
        // var current_rating = parseInt(rating_spans[index].innerHTML);
        if(index <= 6){
            rating_spans[index].style.background = 'rgba(255, 70, 70, 1)';
        } else if( index <= 8){
            rating_spans[index].style.background = 'rgba(255, 153, 0, 1)';
        } else {
            rating_spans[index].style.background = 'rgba(5, 178, 54, 1)';
        }
        // rating_spans[index].style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        rating_spans[index].style.color = "#fff";
        easyassist_tickmarks_clicked[index] = true;
        rating_spans[index].style.border = "none";
    }

    for(var index = user_rating + 1; index < rating_spans.length; index ++) {
        var current_rating = parseInt(rating_spans[index].innerHTML);
        rating_spans[index].style.background = "unset"
        rating_spans[index].style.color = '#2D2D2D';
        easyassist_tickmarks_clicked[index] = false;
        rating_spans[index].style.border = "1px solid #E6E6E6";
    }
}

function easyassist_reset_rating_bar() {
    var rating_bar = document.getElementsByClassName("easyassist-tickmarks")[0];
    var rating_spans = rating_bar.querySelectorAll("span");
    for (var index = 0; index < rating_spans.length; index++) {
        rating_spans[index].style.background = "unset";
        rating_spans[index].style.color = '#2D2D2D';
        rating_spans[index].style.border = "1px solid #E6E6E6";
        easyassist_tickmarks_clicked[index] = false;
    }
}

window.addEventListener('message', function(event) {
    // IMPORTANT: Check the origin of the data!

    var easyassist_session_id = get_easyassist_cookie("easyassist_session_id");

    if (~event.origin.indexOf(EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST)) {
        data = {};
        try {
            data = JSON.parse(event.data);
        } catch {}

        if (data.event_id == "collect-cookie-updates") {
            if (data != "None") {
                data = atob(data.eacSession);
                try {
                    data = JSON.parse(data);
                    if (data.hostname != window.location.hostname) {
                        delete data["hostname"];
                        for (cookie_name in data) {
                            console.log(cookiename, data[cookiename]);
                            set_easyassist_cookie(cookie_name, data[cookie_name]);
                        }
                    }
                } catch {
                    console.warn("unable to decode session details.");
                }
            }
        } else if (data.event_id == "close-bot") {
            easyassist_hide_livechat_iframe();
        } else if (data.event_id == "cobrowsing-client-chat-message") {
            message = data.data.message;
            attachment = data.data.attachment;
            attachment_file_name = data.data.attachment_file_name;
            easyassist_send_livechat_message_to_agent(message, attachment, attachment_file_name);
        } else if (event.data.event_id === "livechat-typing") {
            easyassist_send_livechat_typing_indication()
        }

        if(event.data == "voip_meeting_ready") {
            easyassist_send_voip_meeting_ready_over_socket();
            var voip_meeting_ready_interval = setInterval(function() {
                if(get_easyassist_cookie("is_agent_voip_meeting_joined") == get_easyassist_cookie("easyassist_session_id")) {
                    if(get_easyassist_cookie("is_meeting_audio_muted") == "true") {
                        document.getElementById("easyassist-client-meeting-mic-off-btn").click();
                    }
                    document.getElementById("easyassist-voip-loader").style.display = 'none';
                    clearInterval(voip_meeting_ready_interval);
                }
            }, 1000);

        } else if(event.data == "voip_meeting_ended") {
            easyassist_reset_voip_meeting();
        }
    } else {
        return;
    }
});

(function(exports) {

    var search_html_field = window.EASYASSIST_COBROWSE_META.search_html_field;
    var obfuscated_fields = window.EASYASSIST_COBROWSE_META.obfuscated_fields;
    var custom_select_removed_fields = window.EASYASSIST_COBROWSE_META.custom_select_removed_fields;
    window.easyassist_visited_nodes_map = {};
    window.easyassist_element_id_counter = 0;
    window.parse_dom_tree_interval = null;
    window.easyassist_close_nav_timeout = null;
    window.EASYASSIST_TAG_VALUE = "easyassist-tag-value";

    function easyassist_obfuscate_data_using_recursion(element) {

        if (!element.children.length) {

            element.innerHTML = easyassist_obfuscate(element.innerHTML);
            return;
        }

        for (var index = 0; index < element.children.length; index++) {

            easyassist_obfuscate_data_using_recursion(element.children[index]);
        }

        var child_objects = element.children;

        var inner_text = element.innerText;
        if (inner_text.length > 0 && inner_text[0] != 'X') {

            element.innerHTML = "XXXXXXXXXX";
            for (var index = 0; index < child_objects.length; index++) {

                element.appendChild(child_objects[index]);
            }
            return;
        }
        return;
    }

    function easyassist_obfuscated_element_check(element) {
        try {
            var masking_type = element.getAttribute("easyassist-obfuscate");
            if(masking_type && (masking_type == "partial-masking" || masking_type == "full-masking"))
                return [true, masking_type];
            return [false, ""];
        } catch(err) {
            return [false, ""];
        }
    }

    function easyassist_custom_select_remove_check(element) {

        try {
            for (var index = 0; index < custom_select_removed_fields.length; index++) {
                element_value = element.getAttribute(custom_select_removed_fields[index]["key"]);
                if (element_value != null && element_value != undefined && element_value == custom_select_removed_fields[index]["value"]) {
                    return true;
                }
            }
            return false;
        } catch(err) {
            return false;
        }
    }

    function easyassist_create_value_attr_into_document() {

        easyassist_masked_field_attr_set();

        document_input_tag_list = document.querySelectorAll("input");

        for (var d_index = 0; d_index < document_input_tag_list.length; d_index++) {

            add_easyassist_event_listner_into_element(document_input_tag_list[d_index], "change", easyassist_sync_html_element_value_change)

            var is_numeric = false;
            if (isNaN(parseInt(document_input_tag_list[d_index].value)) == false) {
                is_numeric = true;
            }

            var is_type_text = false;
            var attr_type = document_input_tag_list[d_index].getAttribute("type");
            if (attr_type == "text") {
                is_type_text = true;
            }

            var is_active_element = false;
            if (document.activeElement == document_input_tag_list[d_index]) {
                is_active_element = true;
            }
            if (attr_type == "button" || attr_type == "submit") {
                document_input_tag_list[d_index].classList.add("easyassist-click-element");
            }

            var is_obfuscated_element = easyassist_obfuscated_element_check(document_input_tag_list[d_index]);

            if(is_obfuscated_element[0])
                easyassist_add_warning_element(document_input_tag_list[d_index]);

            document_input_tag_list[d_index].removeAttribute("easyassist-active");
            if (is_active_element) {
                document_input_tag_list[d_index].setAttribute("easyassist-active", "true");
            }

            value = document_input_tag_list[d_index].value;

            if (attr_type == "checkbox") {
                if (document_input_tag_list[d_index].checked) {
                    document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, "checked");
                } else {
                    document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, "unchecked");
                }
            } else if (attr_type == "radio") {
                if (document_input_tag_list[d_index].checked) {
                    document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, "checked");
                } else {
                    document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, "unchecked");
                }
            } else if (is_obfuscated_element[0]) {
                document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(value, is_obfuscated_element[1]));
            } else if (is_numeric) {
                document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(value));
            } else if (document_input_tag_list[d_index].getAttribute("easyassist-masked") == "true") {
                document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(value));
            } else if (document_input_tag_list[d_index].getAttribute("type") == "password") {
                document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(value));
            } else if (document_input_tag_list[d_index].getAttribute("type") == "file" && EASYASSIST_COBROWSE_META.allow_file_verification) {
                add_easyassist_event_listner_into_element(document_input_tag_list[d_index], "change", easyassist_send_attachment_to_agent_for_validation)
            } else {
                document_input_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, value);
            }
        }

        document_textarea_tag_list = document.querySelectorAll("textarea");
        for (var d_index = 0; d_index < document_textarea_tag_list.length; d_index++) {
            add_easyassist_event_listner_into_element(document_textarea_tag_list[d_index], "scroll", easyassist_sync_scroll_position_inside_div);
            var is_active_element = false;
            if (document.activeElement == document_textarea_tag_list[d_index]) {
                is_active_element = true;
            }

            document_textarea_tag_list[d_index].removeAttribute("easyassist-active");
            if (is_active_element) {
                document_textarea_tag_list[d_index].setAttribute("easyassist-active", "true");
            }

            var is_numeric = false;
            if (isNaN(parseInt(document_textarea_tag_list[d_index].value)) == false) {
                is_numeric = true;
            }

            var is_obfuscated_element = easyassist_obfuscated_element_check(document_textarea_tag_list[d_index]);
            if (is_obfuscated_element[0]) {
                document_textarea_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(document_textarea_tag_list[d_index].value, is_obfuscated_element[1]));
                easyassist_add_warning_element(document_textarea_tag_list[d_index]);
            } else if (is_numeric) {
                document_textarea_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(document_textarea_tag_list[d_index].value));
            } else {
                document_textarea_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, document_textarea_tag_list[d_index].value);
            }
        }

        document_select_tag_list = document.querySelectorAll("select");

        easyassist_apply_custom_select(document_select_tag_list);
        for (var d_index = 0; d_index < document_select_tag_list.length; d_index++) {
            add_easyassist_event_listner_into_element(document_select_tag_list[d_index], "change", easyassist_sync_html_element_value_change);

            var is_active_element = false;
            if (document.activeElement == document_select_tag_list[d_index]) {
                is_active_element = true;
            }

            document_select_tag_list[d_index].removeAttribute("easyassist-active");
            if (is_active_element) {
                document_select_tag_list[d_index].setAttribute("easyassist-active", "true");
            }

            var is_obfuscated_element = easyassist_obfuscated_element_check(document_select_tag_list[d_index]);

            var selected_option = document_select_tag_list[d_index].options[document_select_tag_list[d_index].selectedIndex];
            if (selected_option != null && selected_option != undefined) {
                var selected_option_inner_html = selected_option.innerHTML;
                var selected_option_value = selected_option.value;
                if (is_obfuscated_element[0] == false) {
                    document_select_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, selected_option_inner_html);
                } else {
                    document_select_tag_list[d_index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(selected_option_inner_html, is_obfuscated_element[1]));
                }
            }
            if(is_obfuscated_element[0])
                easyassist_add_warning_element(document_select_tag_list[d_index]);
        }

        document_table_tag_list = document.querySelectorAll("table");
        for (var d_index = 0; d_index < document_table_tag_list.length; d_index++) {

            var is_obfuscated_element = false;
            for (var mask_index = 0; mask_index < obfuscated_fields.length; mask_index++) {
                element_value = document_table_tag_list[d_index].getAttribute(obfuscated_fields[mask_index]["key"]);
                if (element_value != null && element_value != undefined && element_value == obfuscated_fields[mask_index]["value"]) {
                    is_obfuscated_element = true;
                    break;
                }
            }

            if (!is_obfuscated_element) {

                continue;
            }
            for (var row_index = 0; row_index < document_table_tag_list[d_index].tBodies[0].rows.length; row_index++) {

                for (var col_index = 0; col_index < document_table_tag_list[d_index].tBodies[0].rows[row_index].children.length; col_index++) {

                    var table_element = document_table_tag_list[d_index].tBodies[0].rows[row_index].children[col_index];
                    add_easyassist_event_listner_into_element(table_element, "change", easyassist_sync_html_element_value_change)
                }
            }
            if(is_obfuscated_element)
                easyassist_add_warning_element(document_table_tag_list[d_index]);
        }

        document_a_tag_list = document.querySelectorAll("a");
        for (var index = 0; index < document_a_tag_list.length; index++) {
            document_a_tag_list[index].classList.add("easyassist-click-element");
        }

        document_button_tag_list = document.querySelectorAll("button");
        for (var index = 0; index < document_button_tag_list.length; index++) {
            document_button_tag_list[index].classList.add("easyassist-click-element");
        }
        
        // document_span_tag_list = document.querySelectorAll("span");
        // for (var index=0; index<document_span_tag_list.length; index++){
        //     if (document_span_tag_list[index].children.length == 0){
        //         var numbers = new Set("1234567890");
        //         var chars = new Set(document_span_tag_list[index].innerText);
        //         var is_number_present = false;
        //         for (let num of numbers){
        //             if (chars.has(num)){
        //                 is_number_present = true;
        //                 break;
        //             }
        //         }
        //         if (is_number_present){
        //             document_span_tag_list[index].setAttribute("easyassist-obfuscate", "full-masking");
        //             document_span_tag_list[index].setAttribute(EASYASSIST_TAG_VALUE, easyassist_obfuscate(document_span_tag_list[index].innerText));
        //         }
        //     }
        // }
    }

    function easyassist_set_value_attr_into_screenshot(screenshot) {
        var easyassist_edit_access = get_easyassist_cookie("easyassist_edit_access");
        screenshot_input_tag_list = screenshot.querySelectorAll("input");
        for (var s_index = 0; s_index < screenshot_input_tag_list.length; s_index++) {
            // if (easyassist_edit_access != "true") {
            //     screenshot_input_tag_list[s_index].style.pointerEvents = 'none';
            // }
            attr_type = screenshot_input_tag_list[s_index].getAttribute("type");
            easyassist_tag_value = screenshot_input_tag_list[s_index].getAttribute(EASYASSIST_TAG_VALUE);
            if (attr_type == "checkbox" || attr_type == "radio") {
                screenshot_input_tag_list[s_index].removeAttribute("checked");
                if (easyassist_tag_value == "checked") {
                    screenshot_input_tag_list[s_index].setAttribute("checked", "checked");
                }
            } else {
                screenshot_input_tag_list[s_index].setAttribute("value", easyassist_tag_value);
                screenshot_input_tag_list[s_index].value = easyassist_tag_value;
            }
            screenshot_input_tag_list[s_index].removeAttribute(EASYASSIST_TAG_VALUE);
        }

        screenshot_textarea_tag_list = screenshot.querySelectorAll("textarea");
        for (var s_index = 0; s_index < screenshot_textarea_tag_list.length; s_index++) {
            // if (easyassist_edit_access != "true") {
            //     screenshot_textarea_tag_list[s_index].style.pointerEvents = 'none';
            // }
            easyassist_tag_value = screenshot_textarea_tag_list[s_index].getAttribute(EASYASSIST_TAG_VALUE);
            screenshot_textarea_tag_list[s_index].value = easyassist_tag_value;
            screenshot_textarea_tag_list[s_index].innerHTML = easyassist_tag_value;
            screenshot_textarea_tag_list[s_index].removeAttribute(EASYASSIST_TAG_VALUE);
        }

        screenshot_select_tag_list = screenshot.querySelectorAll("select");
        for (var s_index = 0; s_index < screenshot_select_tag_list.length; s_index++) {
            // if (easyassist_edit_access != "true") {
            //     screenshot_select_tag_list[s_index].style.pointerEvents = 'none';
            // }
            easyassist_tag_value = screenshot_select_tag_list[s_index].getAttribute(EASYASSIST_TAG_VALUE);
            screenshot_select_tag_list[s_index].setAttribute("value", easyassist_tag_value);
            screenshot_select_tag_list[s_index].removeAttribute(EASYASSIST_TAG_VALUE);

            if (easyassist_tag_value == "XXXXX") {
                var obfuscated_option = document.createElement("option");
                obfuscated_option.value = "XXXXX";
                obfuscated_option.innerHTML = "XXXXX";
                screenshot_select_tag_list[s_index].appendChild(obfuscated_option);
            }

            for (var option_index = 0; option_index < screenshot_select_tag_list[s_index].options.length; option_index++) {
                screenshot_select_tag_list[s_index].options[option_index].removeAttribute("selected");
                if (screenshot_select_tag_list[s_index].options[option_index].innerHTML == easyassist_tag_value) {
                    screenshot_select_tag_list[s_index].options[option_index].setAttribute("selected", "selected");
                }
            }
            
        }

        screenshot_table_tag_list = screenshot.querySelectorAll("table");

        for (var d_index = 0; d_index < screenshot_table_tag_list.length; d_index++) {

            var is_obfuscated_element = easyassist_obfuscated_element_check(screenshot_table_tag_list[s_index]);
            if (!is_obfuscated_element[0]) {

                continue;
            }
            for (var row_index = 0; row_index < screenshot_table_tag_list[d_index].tBodies[0].rows.length; row_index++) {

                for (var col_index = 0; col_index < screenshot_table_tag_list[d_index].tBodies[0].rows[row_index].children.length; col_index++) {

                    var table_element = screenshot_table_tag_list[d_index].tBodies[0].rows[row_index].children[col_index];
                    easyassist_obfuscate_data_using_recursion(table_element);
                }
            }
        }

        screenshot_label_tag_list = screenshot.querySelectorAll("label");
        for (var d_index = 0; d_index < screenshot_label_tag_list.length; d_index++) {
            // if (easyassist_edit_access != "true") {
            //     screenshot_label_tag_list[d_index].style.pointerEvents = 'none';
            // }
            label_id = screenshot_label_tag_list[d_index].getAttribute("id");
            if (label_id == null || label_id == undefined) {
                continue;
            }
            
            var is_obfuscated_element = easyassist_obfuscated_element_check(screenshot_label_tag_list[d_index]);
            if (!is_obfuscated_element[0]) {

                continue;
            }
            screenshot_label_tag_list[d_index].innerHTML = easyassist_obfuscate(screenshot_label_tag_list[d_index].innerHTML);
        }

        screenshot_li_tag_list = screenshot.querySelectorAll("li");
        for (var d_index = 0; d_index < screenshot_li_tag_list.length; d_index++) {

            li_id = screenshot_li_tag_list[d_index].getAttribute("id");
            if (li_id == null || li_id == undefined) {
                continue;
            }

            if (!easyassist_obfuscated_element_check(screenshot_li_tag_list[d_index])[0]) {

                continue;
            }
            screenshot_li_tag_list[d_index].innerHTML = easyassist_obfuscate(screenshot_li_tag_list[d_index].innerHTML);
        }

        screenshot_p_tag_list = screenshot.querySelectorAll("p");

        for (var p_index = 0; p_index < screenshot_p_tag_list.length; p_index++) {
            var is_obfuscated_element = false;
            for (var mask_index = 0; mask_index < obfuscated_fields.length; mask_index++) {
                element_value = screenshot_p_tag_list[p_index].getAttribute(obfuscated_fields[mask_index]["key"]);
                if (element_value != null && element_value != undefined && element_value == obfuscated_fields[mask_index]["value"]) {
                    is_obfuscated_element = true;
                    break;
                }
            }

            if (is_obfuscated_element) {
                screenshot_p_tag_list[p_index].innerHTML = "XXXXXXXXXXXXX";
            }

        }


        screenshot_div_tag_list = screenshot.querySelectorAll("div");

        for (var div_index = 0; div_index < screenshot_div_tag_list.length; div_index++) {
            screenshot_div_tag_list[div_index].onscroll = easyassist_sync_mouse_position
            var is_obfuscated_element = false;
            for (var mask_index = 0; mask_index < obfuscated_fields.length; mask_index++) {
                element_value = screenshot_div_tag_list[div_index].getAttribute(obfuscated_fields[mask_index]["key"]);
                if (element_value != null && element_value != undefined && element_value == obfuscated_fields[mask_index]["value"]) {
                    is_obfuscated_element = true;
                    break;
                }
            }

            if (is_obfuscated_element) {
                screenshot_div_tag_list[div_index].innerHTML = "XXXXXXXXXXXXX";
            }

        }

        document_span_tag_list = screenshot.querySelectorAll("span");
        for (var d_index = 0; d_index < document_span_tag_list.length; d_index++) {
            var is_obfuscated_element = easyassist_obfuscated_element_check(document_span_tag_list[d_index]);
            if (is_obfuscated_element[0]) {
                easyassist_tag_value = document_span_tag_list[d_index].getAttribute(EASYASSIST_TAG_VALUE);
                document_span_tag_list[d_index].innerHTML = easyassist_tag_value;
                document_span_tag_list[d_index].removeAttribute(EASYASSIST_TAG_VALUE);
            }
            if(document_span_tag_list[d_index].className == "easyassist-tooltiptext")
                document_span_tag_list[d_index].style.display = "none";
        }

        // screenshot_a_tag_list = screenshot.querySelectorAll("a");
        // for (var index = 0; index < screenshot_a_tag_list.length; index++) {
        //     if (easyassist_edit_access != "true") {
        //         screenshot_a_tag_list[index].style.pointerEvents = 'none';
        //     }
        // }

        // screenshot_button_tag_list = screenshot.querySelectorAll("button");
        // for (var index = 0; index < screenshot_button_tag_list.length; index++) {
        //     if (easyassist_edit_access != "true") {
        //         screenshot_button_tag_list[index].style.pointerEvents = 'none';
        //     }
        // }

        screenshot_custom_select_elements = screenshot.querySelectorAll(".easyassist-dropdown-selected2")
        for (var index = 0; index < screenshot_custom_select_elements.length; index++) {
            is_obfuscated = easyassist_obfuscated_element_check(screenshot_custom_select_elements[index]);
            if(is_obfuscated[0])
                screenshot_custom_select_elements[index].innerText = easyassist_obfuscate(screenshot_custom_select_elements[index].innerText, is_obfuscated[1]);
        }

        screenshot_custom_select_li_item = screenshot.querySelector(".easyassist-custom-dropdown-option-container2")
        if(screenshot_custom_select_li_item) {
            is_obfuscated = easyassist_obfuscated_element_check(screenshot_custom_select_li_item);
            if(is_obfuscated[0])
                easyassist_obfuscate_data_using_recursion(screenshot_custom_select_li_item);
        }
        // if(easyassist_edit_access == "true"){
        //     screenshot_obfuscated_fields = screenshot.querySelectorAll("[easyassist-obfuscate]")
        //     screenshot_obfuscated_fields.forEach(element => {
        //         element.style.pointerEvents = 'none';
        //     })
        // }
        screenshot_input_number = screenshot.querySelectorAll("input[type=number]")
        screenshot_input_number.forEach(element => {
            element.type = 'text';
        })
        
        custom_elemts = screenshot.querySelectorAll(".semi-bold");
        for (var cx=0; cx<custom_elemts.length; cx++){
        	if (custom_elemts[cx].className == "semi-bold"){
        		custom_elemts[cx].parentElement.childNodes[1].textContent = easyassist_obfuscate(custom_elemts[cx].parentElement.childNodes[1].textContent);
        	}
        }
        
        custom_elemts = screenshot.querySelectorAll(".bold-txt");
        for (var cx=0; cx<custom_elemts.length; cx++){
            try{
                if (custom_elemts[cx].parentElement.childNodes.length == 2){
                    custom_elemts[cx].parentElement.childNodes[1].textContent = easyassist_obfuscate(custom_elemts[cx].parentElement.childNodes[1].textContent);
                }
            }catch(err){}
        }
        
        custom_tables = screenshot.querySelectorAll('table');

        for (var cxi=0; cxi<custom_tables.length; cxi++){
        	tb = custom_tables[cxi];
        	obfuscate_columns = [];
        	for (var cxj=0; cxj<tb.rows[0].cells.length; cxj++){
        		if (tb.rows[0].cells[cxj].className == " amount" || tb.rows[0].cells[cxj].className == " folio-no" || String(tb.rows[0].cells[cxj].innerText).includes("Invested Value") || String(tb.rows[0].cells[cxj].innerText).includes("Market Value") || String(tb.rows[0].cells[cxj].innerText).includes("Gain/Loss") || String(tb.rows[0].cells[cxj].innerText).includes("Folio number") || String(tb.rows[0].cells[cxj].innerText).includes("Folio Number") || String(tb.rows[0].cells[cxj].innerText).includes("Amount")){
        			obfuscate_columns.push(cxj);
        		}
        	}
        	if (obfuscate_columns.length > 0){
        		for (var cxz=1; cxz<tb.rows.length; cxz++){
        			for (var cxa=0; cxa<obfuscate_columns.length; cxa++){
        			    try{
        				    tb.rows[cxz].cells[obfuscate_columns[cxa]].innerText = easyassist_obfuscate(tb.rows[cxz].cells[obfuscate_columns[cxa]].innerText);
        			    }catch(err){}
        			}
        		}
        	}
        }
        
        custom_elemts = screenshot.querySelectorAll("b");
        for (var cx=0; cx<custom_elemts.length; cx++){
            if (custom_elemts[cx].className == "ng-binding"){
                custom_elemts[cx].innerText = easyassist_obfuscate(custom_elemts[cx].innerText);
            }
        }
        
        custom_elemts = screenshot.querySelectorAll(".md-text");
        for (var cx=0; cx<custom_elemts.length; cx++){
            custom_elemts[cx].innerText = easyassist_obfuscate(custom_elemts[cx].innerText);
        }
        
        custom_elemts = screenshot.querySelectorAll("div");
        for (var cx=0; cx<custom_elemts.length; cx++){
            if ((custom_elemts[cx].className == "ng-binding" && custom_elemts[cx].children.length == 0) || String(custom_elemts[cx].className).includes("value-number") || String(custom_elemts[cx].className).includes("info-text") || String(custom_elemts[cx].className).includes("value-change-percent")){
                custom_elemts[cx].innerText = easyassist_obfuscate(String(custom_elemts[cx].innerText).trim());
            }
        }
        
        custom_elemts = screenshot.querySelectorAll(".gain-loss-value");
        for (var cx=0; cx<custom_elemts.length; cx++){
            custom_elemts[cx].innerHTML = easyassist_obfuscate(custom_elemts[cx].innerHTML)
        }
        
        custom_elemts = screenshot.querySelectorAll("span");
        for (var cx=0; cx<custom_elemts.length; cx++){
            if (custom_elemts[cx].className == "ng-binding"){
                var numbers = new Set("1234567890");
                var chars = new Set(custom_elemts[cx].innerText);
                var is_number_present = false;
                for (let num of numbers){
                    if (chars.has(num)){
                        is_number_present = true;
                        break;
                    }
                }
                if (is_number_present){
                    custom_elemts[cx].innerText = easyassist_obfuscate(String(custom_elemts[cx].innerText).trim());
                }
            }else if (String(custom_elemts[cx].className).includes("value-number") || (String(custom_elemts[cx].className).includes("ng-scope") && String(custom_elemts[cx].className).includes("ng-binding"))){
                custom_elemts[cx].innerText = easyassist_obfuscate(String(custom_elemts[cx].innerText).trim());
            }else if (String(custom_elemts[cx].className).includes("folio-number")){
                try{
                    custom_elemts[cx].innerText = custom_elemts[cx].innerText.split(":")[0] + ":" + easyassist_obfuscate(custom_elemts[cx].innerText.split(":")[1]);
                }catch(err){}
            }
        }
    }

    function remove_easyassist_attr_value_from_document() {
        document_input_tag_list = document.querySelectorAll("input");
        for (var d_index = 0; d_index < document_input_tag_list.length; d_index++) {
            document_input_tag_list[d_index].removeAttribute(EASYASSIST_TAG_VALUE);
        }
        document_select_tag_list = document.querySelectorAll("select");
        for (var d_index = 0; d_index < document_select_tag_list.length; d_index++) {
            document_select_tag_list[d_index].removeAttribute(EASYASSIST_TAG_VALUE);
        }
        document_textarea_tag_list = document.querySelectorAll("textarea");
        for (var d_index = 0; d_index < document_textarea_tag_list.length; d_index++) {
            document_textarea_tag_list[d_index].removeAttribute(EASYASSIST_TAG_VALUE);
        }
    }

    function easyassist_masked_field_attr_set(){
        for (var mask_index = 0; mask_index < obfuscated_fields.length; mask_index++) {
            var query = '[' + obfuscated_fields[mask_index]['key'] + '=' + obfuscated_fields[mask_index]['value'] + ']';
            var obfuscated_elements = document.querySelectorAll(query);
            for(var index = 0; index < obfuscated_elements.length; index++) {
                obfuscated_elements[index].setAttribute("easyassist-obfuscate", obfuscated_fields[mask_index]['masking_type']);
            }
        }
    }

    function easyassist_set_scroll_into_document() {
        div_elements = document.querySelectorAll("div");
        for (var index = 0; index < div_elements.length; index++) {
            div_ele = div_elements[index];
            div_ele.setAttribute("easyassist-data-scroll-x", div_ele.scrollLeft);
            div_ele.setAttribute("easyassist-data-scroll-y", div_ele.scrollTop);
        }
    }

    function easyassist_add_canvas_tag_into_document() {
        canvas_elements = document.getElementsByTagName("canvas");
        for (var index = 0; index < canvas_elements.length; index++) {
            canvas_elements[index].setAttribute("easyassist-canvas-id", index);
        }
    }

    function easyassist_convert_canvas_into_image(screenshot) {
        canvas_elements = screenshot.getElementsByTagName("canvas");
        for (var index = 0; index < canvas_elements.length; index++) {
            easyassist_canvas_id = canvas_elements[index].getAttribute("easyassist-canvas-id");
            doc_element = document.querySelector("[easyassist-canvas-id='" + easyassist_canvas_id + "']");

            data_url = doc_element.toDataURL("img/png");
            img_tag = document.createElement("img");
            img_tag.src = data_url;
            canvas_elements[index].style.display = "none";
            canvas_elements[index].parentElement.appendChild(img_tag);
        }
    }

    function easyassist_remove_blocked_html_tags(screenshot) {
        blocked_html_tags = EASYASSIST_COBROWSE_META.blocked_html_tags;
        if (blocked_html_tags.length == 0) {
            return;
        }

        for (var b_index = 0; b_index < blocked_html_tags.length; b_index++) {
            selected_blocked_html_tags = screenshot.querySelectorAll(blocked_html_tags[b_index]);
            for (var index = 0; index < selected_blocked_html_tags.length; index++) {
                blocked_tag_id = selected_blocked_html_tags[index].getAttribute("id");
                if (blocked_tag_id != null && blocked_tag_id != undefined) {
                    continue;
                }
                selected_blocked_html_tags[index].parentNode.removeChild(selected_blocked_html_tags[index]);
            }
        }
    }

    function easyassist_disable_button_elements(screenshot) {
        disable_fields = EASYASSIST_COBROWSE_META.disable_fields;
        if (disable_fields.length == 0) return;
        button_elements = screenshot.querySelectorAll("button");
        for (var index = 0; index < button_elements.length; index++) {
            for (var f_index = 0; f_index < disable_fields.length; f_index++) {
                attr_value = button_elements[index].getAttribute(disable_fields[f_index].key);
                if (attr_value != null && attr_value != undefined && attr_value == disable_fields[f_index].value) {
                    button_elements[index].disabled = true;
                    button_elements[index].onclick = null;
                    button_elements[index].style.setProperty("background-color", "#808080", "important");
                    button_elements[index].style.setProperty("background-image", "unset", "important");
                }
            }
        }

        a_tag_elements = screenshot.querySelectorAll("a");
        for (var index = 0; index < a_tag_elements.length; index++) {
            for (var f_index = 0; f_index < disable_fields.length; f_index++) {
                attr_value = a_tag_elements[index].getAttribute(disable_fields[f_index].key);
                if (attr_value != null && attr_value != undefined && attr_value == disable_fields[f_index].value) {
                    a_tag_elements[index].removeAttribute("href");
                    a_tag_elements[index].onclick = null;
                }
            }
        }

        input_tag_elements = screenshot.querySelectorAll("input");
        for (var index = 0; index < input_tag_elements.length; index++) {
            for (var f_index = 0; f_index < disable_fields.length; f_index++) {
                attr_value = input_tag_elements[index].getAttribute(disable_fields[f_index].key);
                if (attr_value != null && attr_value != undefined && attr_value == disable_fields[f_index].value) {
                    input_tag_elements[index].onclick = null;
                    input_tag_elements[index].disabled = true;
                    input_tag_elements[index].style.setProperty("background-color", "#808080", "important");
                    input_tag_elements[index].style.setProperty("background-image", "unset", "important");
                }
            }
        }
    }

    function easyassist_update_visited_node_map(dom_node) {
        try {
            var child_list = [];
            for(var idx = 0; idx < dom_node.children.length; idx ++) {
                if(easyassist_check_dom_node(dom_node.children[idx])) {
                    continue;
                }
                var child_id = dom_node.children[idx].getAttribute('easyassist-element-id');
                if(child_id) {
                    child_list.push(child_id);
                }
            }

            easyassist_element_id = dom_node.getAttribute('easyassist-element-id');
            if(child_list.length == 0) {
                easyassist_visited_nodes_map[easyassist_element_id] = {
                    "is_hidden": easyassist_check_element_is_hidden(dom_node),
                    "class": dom_node.className,
                    "style": dom_node.getAttribute('style'),
                    "child_list": child_list,
                    "text": dom_node.innerText,
                    "src": dom_node.src,
                };    
            } else {
                easyassist_visited_nodes_map[easyassist_element_id] = {
                    "is_hidden": easyassist_check_element_is_hidden(dom_node),
                    "class": dom_node.className,
                    "style": dom_node.getAttribute('style'),
                    "child_list": child_list,
                    "src": dom_node.src,
                };
            }
        } catch(err) {
            console.log("easyassist_update_visited_node_map: ", err);
        }
    }

    function easyassist_sync_deleted_nodes(dom_node) {
        try {
            var children = dom_node.children;
            var curr_child_set = new Set();
            var curr_child_list = [];
            for(var idx = 0; idx < children.length; idx ++) {
                if(easyassist_check_dom_node(children[idx])) {
                    continue;
                }
                var child_element_id = children[idx].getAttribute('easyassist-element-id');
                if(child_element_id) {
                    curr_child_set.add(child_element_id);
                    curr_child_list.push(child_element_id);
                }
            }

            var easyassist_element_id = dom_node.getAttribute('easyassist-element-id');
            var prev_child_list = easyassist_visited_nodes_map[easyassist_element_id].child_list;
            var element_to_remove = [];
            for(var idx = 0; idx < prev_child_list.length; idx ++) {
                if(!curr_child_set.has(prev_child_list[idx])) {
                    element_to_remove.push(prev_child_list[idx]);
                    easyassist_remove_nodes_from_map(prev_child_list[idx], 0);
                }
            }

            if(element_to_remove.length) {
                easyassist_sync_removed_html_node(element_to_remove);
            }
            easyassist_visited_nodes_map[easyassist_element_id].child_list = curr_child_list;
        } catch(err) {
            console.log("easyassist_sync_deleted_nodes: ", err);
        }
    }

    function easyassist_remove_nodes_from_map(element_id, index) {
        try {
            if(easyassist_visited_nodes_map[element_id] == undefined) {
                return;
            }

            var child_list = easyassist_visited_nodes_map[element_id].child_list;
            for(var idx = 0; idx < child_list.length; idx ++) {
                easyassist_remove_nodes_from_map(child_list[idx], index + 1);
            }
            delete easyassist_visited_nodes_map[element_id];
        } catch(err) {
            console.log("easyassist_remove_nodes_from_map: ", err);
        }
    }

    function easyassist_parse_client_document(dom_node) {

        try {
            if(easyassist_check_dom_node(dom_node)) {
                return;
            }

            var easyassist_element_id = dom_node.getAttribute('easyassist-element-id');
            if(easyassist_element_id) {
                easyassist_sync_deleted_nodes(dom_node);
                var node_visited_status = easyassist_get_node_visited_status(dom_node);
                if(node_visited_status != "no_change") {
                    easyassist_update_visited_node_map(dom_node);
                    easyassist_sync_html_node(dom_node, node_visited_status);
                }
            } else {
                easyassist_visit_all_child_node(dom_node);
                easyassist_sync_html_node(dom_node);
                return;
            }

            var node_children = dom_node.children;
            var element_to_sync = [];
            for(var idx = 0; idx < node_children.length; idx ++) {
                if(easyassist_check_dom_node(node_children[idx])) {
                    continue;
                }

                easyassist_element_id = node_children[idx].getAttribute('easyassist-element-id');
                var current_parent_element_id = dom_node.getAttribute("easyassist-element-id");
                var previous_element_id = node_children[idx].getAttribute("easyassist-parent-element-id")

                if(easyassist_element_id && previous_element_id == current_parent_element_id) {
                    easyassist_sync_deleted_nodes(node_children[idx]);
                    easyassist_parse_client_document(node_children[idx]);
                } else {
                    easyassist_visit_all_child_node(node_children[idx]);
                    element_to_sync.push(idx);
                }
            }

            for(var idx = 0; idx < node_children.length; idx ++) {
                if(easyassist_check_dom_node(node_children[idx])) {
                    continue;
                }
                easyassist_element_id = node_children[idx].getAttribute('easyassist-element-id');
                if(easyassist_element_id) {
                    easyassist_sync_deleted_nodes(node_children[idx]);
                }
            }

            for(var idx = 0; idx < element_to_sync.length; idx ++) {
                easyassist_sync_new_html_node(dom_node, node_children[element_to_sync[idx]], element_to_sync[idx]);
            }

            if(node_children.length == 0) {
                if(easyassist_check_dom_node_text_chnage(dom_node)) {
                    easyassist_sync_html_node(dom_node, "text_change");
                }
            }

            easyassist_update_visited_node_map(dom_node);
            if(dom_node.tagName == "HTML") {
                is_recursive_call_ended = true;
            }
        } catch(err) {
            console.log("easyassist_parse_client_document: ", err);
        }
    }

    function easyassist_check_dom_node_text_chnage(dom_node) {
        try {
            var easyassist_element_id = dom_node.getAttribute('easyassist-element-id');
            var element_text = dom_node.innerText;
            if(element_text != easyassist_visited_nodes_map[easyassist_element_id].text) {
                easyassist_visited_nodes_map[easyassist_element_id].text = element_text;
                return true;
            }
            return false;
        } catch(err) {
            console.log("easyassist_check_dom_node_text_chnage: ", err);
            return false;
        }
    }

    function easyassist_check_dom_node(element) {
        try {
            var is_element_to_remove = false;
            for(var idx = 0; idx < EASYASSIST_HTML_ID_TO_REMOVE.length; idx ++) {
                if(element.id == EASYASSIST_HTML_ID_TO_REMOVE[idx]) {
                    is_element_to_remove = true;
                    break;
                }
            }
            return is_element_to_remove;
        } catch(err) {
            console.log("easyassist_check_dom_node: ", err);
            return false;
        }
    }

    function easyassist_visit_all_child_node(dom_node) {

        try {
            if(easyassist_check_dom_node(dom_node)) {
                return;
            }

            var easyassist_element_id = easyassist_get_hash_for_dom_node();
            dom_node.setAttribute("easyassist-element-id", easyassist_element_id);

            var parent_element_id = -1;
            try {
                parent_element_id = dom_node.parentNode.getAttribute("easyassist-element-id")
            } catch(err) {}

            dom_node.setAttribute("easyassist-parent-element-id", parent_element_id)
            add_easyassist_event_listner_into_element(dom_node, "scroll", easyassist_sync_scroll_position_inside_div);
            var node_children = dom_node.children;
            for(var idx = 0; idx < node_children.length; idx ++) {
                easyassist_visit_all_child_node(node_children[idx]);
            }

            easyassist_update_visited_node_map(dom_node);

            if(dom_node.tagName == "HTML") {
                is_all_nodes_visited_for_first_time = true;
            }
        } catch(err) {
            console.log("easyassist_visit_all_child_node: ", err);
        }
    }

    function easyassist_get_hash_for_dom_node() {

        easyassist_element_id_counter += 1;
        return easyassist_element_id_counter;
    }

    // TODO: current limitation is css background images are not included.
    function easyassist_screenshot_page() {

        easyassist_convert_urls_to_absolute(document.images);
        easyassist_convert_urls_to_absolute(document.querySelectorAll("iframe"));
        easyassist_convert_urls_to_absolute(document.scripts);

        easyassist_create_value_attr_into_document();
        easyassist_set_scroll_into_document();
        easyassist_add_canvas_tag_into_document();

        if(Object.keys(easyassist_visited_nodes_map).length == 0) {
            easyassist_visit_all_child_node(document.children[0]);
        }

        // 2. Duplicate entire document.
        var screenshot = document.documentElement.cloneNode(false);
        screenshot = document.documentElement.cloneNode(true);
        easyassist_convert_urls_to_absolute(screenshot.querySelectorAll("link"));

        easyassist_remove_blocked_html_tags(screenshot);
        easyassist_set_value_attr_into_screenshot(screenshot);
        remove_easyassist_attr_value_from_document();

        easyassist_disable_button_elements(screenshot);

        try {
            screenshot.getElementsByTagName("div").namedItem("easyassist-co-browsing-request-edit-access").remove()
        } catch(err) {}


        easyassist_create_proxy_server_pass_urls(document.querySelectorAll("iframe"));
        easyassist_create_proxy_server_pass_urls(screenshot.querySelectorAll("link[rel='stylesheet']"));
        easyassist_convert_canvas_into_image(screenshot);

        screenshot_scripts = screenshot.querySelectorAll("script");
        for (var index = 0; index < screenshot_scripts.length; index++) {
            if (EASYASSIST_COBROWSE_META.strip_js) {
                screenshot_scripts[index].parentNode.removeChild(screenshot_scripts[index]);
            }
        }

        var b = document.createElement('base');
        b.href = document.location.protocol + '//' + location.host;
        var head = screenshot.querySelector('head');
        head.insertBefore(b, head.firstChild);

        // 3. Screenshot should be readyonly, no scrolling, and no selections.
        if (get_easyassist_cookie("easyassist_edit_access") != "true") {
            // screenshot.style.pointerEvents = 'none';
            // screenshot.style.webkitUserSelect = 'none';
            // screenshot.style.mozUserSelect = 'none';
            // screenshot.style.msUserSelect = 'none';
            // screenshot.style.oUserSelect = 'none';
            // screenshot.style.userSelect = 'none';
        }

        screenshot.dataset.scrollX = window.scrollX;
        screenshot.dataset.scrollY = window.scrollY;
        screenshot.dataset.screenWidth = screen.width;
        screenshot.dataset.screenHeight = screen.height;

        for(var idx = 0; idx < EASYASSIST_HTML_ID_TO_REMOVE.length; idx ++) {
            try {
                var screenshot_element = screenshot.querySelector("#" + EASYASSIST_HTML_ID_TO_REMOVE[idx]);
                screenshot_element.parentNode.removeChild(screenshot_element);
            } catch(err) {}
        }

        var chatbot_element = screenshot.querySelector("#allincall-chat-box");
        if (chatbot_element != null && chatbot_element != undefined) {
            chatbot_element.parentNode.removeChild(chatbot_element);
        }

        outerhtml = screenshot.outerHTML;
        if(document.compatMode == "CSS1Compat")
            outerhtml = "<!DOCTYPE HTML>\n" + outerhtml;
        outerhtml = outerhtml.replace(/\s+/g, " ");
        return outerhtml;
    }

    function easyassist_add_ripple_animation_frame() {

        var span = document.createElement("span");
        span.id = "easyassist-ripple_effect";
        span.style.height = "15px";
        span.style.width = "15px";
        span.style.border = "1px solid red";
        span.style.borderRadius = "50%";
        span.style.position = "fixed";
        span.style.zIndex = "2147483647";
        span.style.WebkitAnimationName = "easyassist-ripple-animation";
        span.style.animationName = "easyassist-ripple-animation";
        span.style.animationDuration = "1s";
        span.style.animationTimingFunction = "ease";
        span.style.animationIterationCount = "infinite";
        document.getElementsByTagName("body")[0].appendChild(span);
        document.getElementById("easyassist-ripple_effect").style.display = "none";
        var div = document.createElement("span");
        div.id = "easyassist-snackbar";
        document.getElementsByTagName("body")[0].appendChild(div);
    }

    var show_ripple_timer = null;

    function easyassist_show_ripple_effect(clientX, clientY) {
        if (show_ripple_timer != null) {
            clearTimeout(show_ripple_timer);
        }
        var span = document.getElementById("easyassist-ripple_effect");
        easyassist_hide_ripple_effect();
        span.style.display = "inline-block";
        span.style.top = clientY + "px";
        span.style.left = clientX + "px";
        show_ripple_timer = setTimeout(function(e) {
            easyassist_hide_ripple_effect();
        }, 5000);
    }

    function easyassist_hide_ripple_effect() {
        var span = document.getElementById("easyassist-ripple_effect");
        span.style.display = "none";
    }

    function easyassist_add_connection_modal() {
        var div_model = document.createElement("div");
        div_model.id = "easyassist-conection-modal-id"
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";
        var modal_html = [
        	'<div class="easyassist-customer-connect-modal-content">',
        		'<div class="easyassist-customer-connect-modal-header">',
        			'<h6>Connect with our Experts</h6>',
        		'</div>',
        		'<div class="easyassist-customer-connect-modal-body">',
        			 EASYASSIST_COBROWSE_META.message_on_connect_confirmation_modal,
        		'</div>',
        		'<div class="easyassist-customer-connect-modal-footer">',
        			'<button class="easyassist-modal-primary-btn" onclick="easyassist_close_connection_modal(this)" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important;">OK</button>',
        		'</div>',
        	'</div>',
        ].join('');
        div_model.innerHTML = modal_html;
        document.getElementsByTagName("body")[0].appendChild(div_model);
    }

    function easyassist_add_floating_sidenav_button() { 
        if (EASYASSIST_COBROWSE_META.show_easyassist_connect_agent_icon == true && EASYASSIST_COBROWSE_META.source_easyassist_connect_agent_icon != "null") {
            var src = EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/" + EASYASSIST_COBROWSE_META.source_easyassist_connect_agent_icon;
            add_connect_icon_into_page(src);
        } else {
            if(EASYASSIST_COBROWSE_META.allow_video_meeting_only == true){
                add_connect_sidenav_into_page(true)
            }else{
                add_connect_sidenav_into_page(false);
            }
        }
        //Add Model
        var div_model = document.createElement("div");
        div_model.id = "easyassist-co-browsing-modal-id"
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";
        if (EASYASSIST_COBROWSE_META.enable_location) {
            if (window.navigator.geolocation) {
                var geolocation_options = {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 0
                };
                window.navigator.geolocation.getCurrentPosition(easyassist_accept_location_request, easyassist_cancel_location_request, geolocation_options);
            }
        }
        var mobile_input_html = "";
        var virtual_agent_code_html = "";
        var lang_dropdown_html = "";
        if (EASYASSIST_COBROWSE_META.ask_client_mobile == true || EASYASSIST_COBROWSE_META.ask_client_mobile == "true" || EASYASSIST_COBROWSE_META.ask_client_mobile == "True") {
            if (EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == true || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "true" || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "True") {
                mobile_input_html += [
                	'<div class="easyassist-customer-connect-modal-content-wrapper">',
                        '<div style="display:flex;flex-direction:row; border-radius:30px;">',
                            '<span class="easyassist-customer-connect-span-prepend">+91</span>',
                		    '<input type="number" autocomplete="off" name="easyassist-client-mobile-number" id="easyassist-client-mobile-number" placeholder="Enter Mobile number" onkeydown="easyassist_prevent_non_numeric_characters(event)" style="border-radius: 0 30px 30px 0!important;margin-left: -1px;" >',
                        '</div>',
        		        '<label id="modal-cobrowse-customer-number-error"></label>',
                	'</div>',
                ].join('');
            } else {
                mobile_input_html += [
                	'<div class="easyassist-customer-connect-modal-content-wrapper">',
                        '<div style="display:flex;flex-direction:row;border-radius:30px;">',
                            '<span class="easyassist-customer-connect-span-prepend">+91</span>',
                		    '<input type="number" autocomplete="off" name="easyassist-client-mobile-number" id="easyassist-client-mobile-number" placeholder="Enter Mobile Number (optional)" onkeydown="easyassist_prevent_non_numeric_characters(event)" style="border-radius: 0 30px 30px 0!important;margin-left: -1px;" >',
                        '</div>',
                		'<label id="modal-cobrowse-customer-number-error"></label>',
                	'</div>'
                ].join('');
            }
        }

        if (EASYASSIST_COBROWSE_META.allow_connect_with_virtual_agent_code == true){
            virtual_agent_code_html += [
            	'<div class="easyassist-customer-connect-modal-content-wrapper">',
            		'<input type="text" autocomplete="off" name="easyassist-client-agent-virtual-code" id="easyassist-client-agent-virtual-code" placeholder="Enter agent code" >',
            		'<label id="modal-cobrowse-virtual-agent-code-error"></label>',
            	'</div>',
            ].join('');
        }

        if (EASYASSIST_COBROWSE_META.allow_language_support == true || EASYASSIST_COBROWSE_META.allow_language_support == "true" || EASYASSIST_COBROWSE_META.allow_language_support == "True") {
            var dropdown_option_html = "";
            for (var index = 0; index < EASYASSIST_COBROWSE_META.supported_language.length; index++) {
                if (EASYASSIST_COBROWSE_META.supported_language[index]["value"].toLowerCase() == "english") {
                    dropdown_option_html += '<option selected="" value="' + EASYASSIST_COBROWSE_META.supported_language[index]["key"] + '">' + EASYASSIST_COBROWSE_META.supported_language[index]["value"] + '</option>';
                } else {
                    dropdown_option_html += '<option value="' + EASYASSIST_COBROWSE_META.supported_language[index]["key"] + '">' + EASYASSIST_COBROWSE_META.supported_language[index]["value"] + '</option>';
                }
            }
            lang_dropdown_html += [
            	'<div class="easyassist-customer-connect-modal-content-wrapper">',
	            	'<select id="easyassist-inline-form-input-preferred-language" >',
	                    dropdown_option_html,
	                '</select>',
	                '<label id="modal-cobrowse-customer-language-error"></label>',
	            '</div>',
	        ].join('');
        }

        var modal_html = [
            '<div class="easyassist-customer-connect-modal-content">',
                '<div class="easyassist-customer-connect-modal-header" style="text-align: center;">',
                    '<h6>Connect with our Experts</h6>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-body" style="padding: 1rem 2rem!important;">',
                    '<div class="easyassist-customer-connect-modal-content-wrapper">',
                        '<input type="text" autocomplete="off" name="easyassist-client-name" id="easyassist-client-name" placeholder="Enter Full name">',
                        '<label id="modal-cobrowse-customer-name-error"></label>',
                    '</div>',
                    mobile_input_html,
                    virtual_agent_code_html,
                    lang_dropdown_html,
                    '<div class="easyassist-customer-connect-modal-content-wrapper" style="text-align:center;">',
                    	'<span>' + EASYASSIST_COBROWSE_META.connect_message + '</span>',
                    '</div>',
                    '<label id="modal-cobrowse-connect-error"></label>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-footer">',
                	'<div style="padding-top: 1em;">',
		                '<button class ="easyassist-modal-cancel-btn" id="easyassist-co-browsing-connect-cancel-btn" onclick="easyassist_close_browsing_modal()">Cancel</button>',
		        		'<button class ="easyassist-modal-primary-btn" id="easyassist-co-browsing-connect-button"  onclick="easyassist_connect_with_agent()">Connect</button>',
		        	'</div>',
                '</div>',
            '</div>'
        ].join('');

        div_model.innerHTML = modal_html;
        var sharable_link = '<div id="easychat_share_link_Model"><div class="easychat_share_link_Model-content"><h3>Share with Others</h3><br><div class="easychat_share_link_Model-content_wrapper" ><div class="easychat_share_link_Model-content_buttons_wrapper"><button disabled style="width: 75%;">Anyone with the link can guide you</button><button style="width: 25%;" onclick="easyassist_copy_text_to_clipboard_sharable_link()">Copy link</button></div><input id="easychat_share_link_Model-content_link_wrapper" type="text" value="" disabled autocomplete="off"></div><br><p style="color: black;">*Your personal information will be masked and will not be shared with anyone.</p><br><button class="easychat_share_link_Model-content-close_button">Done</button></div></div>';
        document.getElementsByTagName("body")[0].appendChild(div_model);
        document.getElementById("easyassist-co-browsing-connect-cancel-btn").style.setProperty(
            'color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
        document.getElementById("easyassist-co-browsing-connect-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', sharable_link);

        if (EASYASSIST_COBROWSE_META.allow_language_support == true || EASYASSIST_COBROWSE_META.allow_language_support == "true" || EASYASSIST_COBROWSE_META.allow_language_support == "True") {
            document.getElementById("easyassist-inline-form-input-preferred-language").selectedIndex = -1;
            var product_category_dropdown = new EasyassistCustomSelect(
                '#easyassist-inline-form-input-preferred-language', 
                'Choose preferred language',
                EASYASSIST_COBROWSE_META.floating_button_bg_color);
        }

        document.getElementById("easyassist-client-name").addEventListener('keydown', function(e) {
            var target_el = e.target;
            if(target_el.value.length > 40) {
                if(e.key != 'Backspace' && e.key != 'Delete' && e.key != 'ArrowLeft' && e.key != 'ArrowRight') {
                    e.preventDefault()
                }
            }
        });
    }

    function easyassist_add_non_working_hour_modal() {
        //Add Model
        var div_model = document.createElement("div");
        div_model.id = "easyassist-non-working-hours-modal-id"
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";

        var mobile_input_html = "";
        if (EASYASSIST_COBROWSE_META.ask_client_mobile == true || EASYASSIST_COBROWSE_META.ask_client_mobile == "true" || EASYASSIST_COBROWSE_META.ask_client_mobile == "True") {
            if (EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == true || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "true" || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "True") {
                mobile_input_html += [
                    '<div class="easyassist-customer-connect-modal-content-wrapper">',
                        '<div style="display:flex;flex-direction:row; border-radius:30px;">',
                            '<span class="easyassist-customer-connect-span-prepend">+91</span>',
                            '<input type="number" autocomplete="off" name="modal-non-working-client-mobile-number" id="modal-non-working-client-mobile-number" placeholder="Enter Mobile number" onkeydown="easyassist_prevent_non_numeric_characters(event)" style="border-radius: 0 30px 30px 0!important;margin-left: -1px;" >',
                        '</div>',
                        '<label id="modal-non-working-customer-number-error"></label>',
                    '</div>',
                ].join('');
            } else {
                mobile_input_html += [
                    '<div class="easyassist-customer-connect-modal-content-wrapper">',
                        '<div style="display:flex;flex-direction:row;border-radius:30px;">',
                            '<span class="easyassist-customer-connect-span-prepend">+91</span>',
                            '<input type="number" autocomplete="off" name="modal-non-working-client-mobile-number" id="modal-non-working-client-mobile-number" placeholder="Enter Mobile Number (optional)" onkeydown="easyassist_prevent_non_numeric_characters(event)" style="border-radius: 0 30px 30px 0!important;margin-left: -1px;" >',
                        '</div>',
                        '<label id="modal-non-working-customer-number-error"></label>',
                    '</div>'
                ].join('');
            }
        }

        var modal_html = [
            '<div class="easyassist-customer-connect-modal-content">',
                '<div class="easyassist-customer-connect-modal-header" style="text-align: center;">',
                    '<h6>Connect with our Experts</h6>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-body" style="padding: 1rem 2rem!important;">',
                    '<div class="easyassist-customer-connect-modal-content-wrapper">',
                        '<input type="text" autocomplete="off" name="modal-non-working-client-name" id="modal-non-working-client-name" placeholder="Enter Full name">',
                        '<label id="modal-non-working-customer-name-error"></label>',
                    '</div>',
                    mobile_input_html,
                    '<div class="easyassist-customer-connect-modal-content-wrapper" style="text-align:center;">',
                        '<span>' + EASYASSIST_COBROWSE_META.message_on_non_working_hours + '</span>',
                    '</div>',
                    '<label id="modal-non-working-connect-error"></label>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-footer">',
                    '<div style="padding-top: 1em;">',
                        '<button class ="easyassist-modal-cancel-btn" id="modal-non-working-connect-cancel-btn" onclick="easyassist_close_non_working_hour_browsing_modal()">Cancel</button>',
                        '<button class ="easyassist-modal-primary-btn" id="modal-non-working-connect-button"  onclick="easyassist_save_non_working_hour_customer_details()">Submit</button>',
                    '</div>',
                '</div>',
            '</div>'
        ].join('');

        div_model.innerHTML = modal_html;
        document.getElementsByTagName("body")[0].appendChild(div_model);
        document.getElementById("modal-non-working-connect-cancel-btn").style.setProperty(
            'color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
        document.getElementById("modal-non-working-connect-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');

        document.getElementById("modal-non-working-client-name").addEventListener('keydown', function(e) {
            var target_el = e.target;
            if(target_el.value.length > 40) {
                if(e.key != 'Backspace' && e.key != 'Delete' && e.key != 'ArrowLeft' && e.key != 'ArrowRight') {
                    e.preventDefault()
                }
            }
        });
    }

    function easyassist_show_non_working_hour_modal() {
        document.getElementById("modal-non-working-connect-error").innerHTML = "";
        if(document.getElementById("modal-non-working-customer-name-error")) {
            document.getElementById("modal-non-working-customer-name-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
            document.getElementById("modal-non-working-customer-name-error").innerHTML = "";
        }
        if(document.getElementById("modal-non-working-customer-number-error")) {
            document.getElementById("modal-non-working-customer-number-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
            document.getElementById("modal-non-working-customer-number-error").innerHTML = "";
        }


        document.getElementById("modal-non-working-client-name").value = "";
        if (document.getElementById("modal-non-working-client-mobile-number") != null) {
            document.getElementById("modal-non-working-client-mobile-number").value = "";
        }

        document.getElementById("easyassist-non-working-hours-modal-id").style.display = "flex";
        document.getElementById('modal-non-working-client-name').focus();
        document.getElementById('modal-non-working-client-name').select();
        easyassist_hide_floating_sidenav_button();
    }

    function easyassist_close_non_working_hour_browsing_modal(el) {
        document.getElementById("easyassist-non-working-hours-modal-id").style.display = "none";
        easyassist_show_floating_sidenav_button();
    }

    function easyassist_add_product_category_modal() {
        var div_model = document.createElement("div");
        div_model.id = "easyassist-product-category-modal-id"
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";
        var dropdown_html = "";
        var dropdown_option_html = "";
        if (EASYASSIST_COBROWSE_META.choose_product_category == true) {
            for (var index = 0; index < EASYASSIST_COBROWSE_META.product_category_list.length; index++) {
                dropdown_option_html += '<option value="' + EASYASSIST_COBROWSE_META.product_category_list[index]["key"] + '">' + EASYASSIST_COBROWSE_META.product_category_list[index]["value"] + '</option>';
            }
        }

        dropdown_html += [
        	'<div class="easyassist-customer-connect-modal-content-wrapper">',
        		'<select id="easyassist-inline-form-input-product-category">',
                	dropdown_option_html,
                '</select>',
                '<label id="easyassist-product-category-modal-error" ></label>',
            '</div>'
        ].join('');

        var modal_html = [
            '<div class="easyassist-customer-connect-modal-content">',
                '<div class="easyassist-customer-connect-modal-header">',
                    '<h6>Make a selection</h6>',
                    '<div class="easyassist-customer-connect-modal-content-wrapper">',
                    	EASYASSIST_COBROWSE_META.message_on_choose_product_category_modal,
                	'</div>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-body">',
                    dropdown_html,
                '</div>',
                '<div class="easyassist-customer-connect-modal-footer">',
                    '<button class ="easyassist-modal-cancel-btn" onclick="easyassist_close_product_category_modal()" style="color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important;">Deny</button>',
                    '<button class ="easyassist-modal-primary-btn" id="easyassist-product-category-proceed-button"  onclick="easyassist_set_product_category()">Proceed</button>',
                '</div>',
            '</div>'
        ].join('');

        div_model.innerHTML = modal_html;
        document.getElementsByTagName("body")[0].appendChild(div_model);
        document.getElementById("easyassist-inline-form-input-product-category").selectedIndex = -1;
        var product_category_dropdown = new EasyassistCustomSelect(
            '#easyassist-inline-form-input-product-category', 
            'Select one',
            EASYASSIST_COBROWSE_META.floating_button_bg_color);
        document.getElementById("easyassist-product-category-proceed-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
    }

    function add_connect_sidenav_into_page(value) {
        //Add Span
        var nav_span = document.createElement("span");
        nav_span.id = "easyassist-side-nav-options-co-browsing";
        nav_span.setAttribute("class", "easyassist-side-nav-class");
        nav_span.style.backgroundColor = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        if (EASYASSIST_COBROWSE_META.floating_button_position == "left") {
            if(value == true){
                nav_span.style.left = "-"+ "30" +"px";
            } else {
                nav_span.style.left = "-"+ EASYASSIST_COBROWSE_META.floating_button_left_right_position.toString() +"px";
            }
            nav_span.style.borderRadius = "0px 0px 10px 10px";
        } else {
            nav_span.style.right = "-"+ EASYASSIST_COBROWSE_META.floating_button_left_right_position.toString() +"px";
            nav_span.style.borderRadius = "10px 10px 0px 0px";
        }
        if(value == true){
            nav_span.textContent = "Contact Us";
        }else{
            nav_span.textContent = "Request for Support";
        }
        nav_span.setAttribute("onclick", "easyassist_show_cobrowsing_modal()");
        document.getElementsByTagName("body")[0].appendChild(nav_span);
    }

    function add_connect_icon_into_page(src) {
        var easychat_popup_image = document.createElement("img");
        easychat_popup_image.id = "easyassist-side-nav-options-co-browsing";
        easychat_popup_image.style.position = "fixed";
        easychat_popup_image.style.cursor = "pointer";
        easychat_popup_image.style.bottom = "20px";
        easychat_popup_image.style.width = "8em";
        easychat_popup_image.style.zIndex = "2147483647";
        easychat_popup_image.style.right = "20px";
        easychat_popup_image.setAttribute("onclick", "easyassist_show_cobrowsing_modal()");
        easychat_popup_image.src = src;
        easychat_popup_image.style.display = "none";
        document.body.appendChild(easychat_popup_image);

        var easychat_popup_minimize_tooltip = document.createElement("span");
        easychat_popup_minimize_tooltip.id = "allincall-minimize-popup-tooltip";
        easychat_popup_minimize_tooltip.style.visibility = "hidden";
        easychat_popup_minimize_tooltip.style.backgroundColor = "blue";
        easychat_popup_minimize_tooltip.style.right = "10px";
        easychat_popup_minimize_tooltip.style.bottom = "120px";
        easychat_popup_minimize_tooltip.style.position = "fixed";
        easychat_popup_minimize_tooltip.style.zIndex = "2147483647";
        easychat_popup_minimize_tooltip.style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        easychat_popup_minimize_tooltip.style.color = "white";
        easychat_popup_minimize_tooltip.style.padding = "4px 8px";
        easychat_popup_minimize_tooltip.style.borderRadius = "10px";

        document.getElementsByTagName("body")[0].appendChild(easychat_popup_minimize_tooltip);


        document.getElementById("easyassist-side-nav-options-co-browsing").addEventListener("mouseover", function(e) {
            document.getElementById("allincall-minimize-popup-tooltip").textContent = "Connect with an agent";
            document.getElementById("allincall-minimize-popup-tooltip").style.visibility = "unset";
        });

        document.getElementById("easyassist-side-nav-options-co-browsing").addEventListener("mouseout", function(e) {
            document.getElementById("allincall-minimize-popup-tooltip").style.visibility = "hidden";
        });
    }

    function easyassist_hide_feedback_form(el) {
        document.getElementById("easyassist-co-browsing-feedback-modal").style.display = "none";
    }

    function hide_easyassist_cobrowsing_request_assist_modal() {
        try {
        document.getElementById("easyassist-co-browsing-request-assist-modal").style.display = "none";
        } catch {}
    }

    function easyassist_show_feedback_form(el) {
        easyassist_hide_agent_information_modal();
        hide_easyassist_cobrowsing_request_meeting_modal();
        hide_easyassist_voip_with_video_calling_request_modal();
        hide_easyassist_voip_calling_request_modal();
        hide_easyassist_cobrowsing_request_assist_modal();
        document.getElementById("easyassist-client-feedback").value = "";
        easyassist_reset_rating_bar();
        easyassist_hide_livechat_iframe();

        if(EASYASSIST_COBROWSE_META.allow_video_meeting_only == true) {
            document.getElementById("easyassist-feedback-nothanks-btn").click();
        } else if(get_easyassist_cookie("easyassist_feedback_modal_shown") != "true"){
            document.getElementById("easyassist-co-browsing-feedback-modal").style.display = "flex";
            set_easyassist_cookie("easyassist_feedback_modal_shown", "true")
        } else {
            document.getElementById("easyassist-feedback-nothanks-btn").click();
        }
    }

    function easyassist_hide_agent_joining_modal(el) {
        document.getElementById("easyassist_agent_joining_modal").style.display = "none";
    }

    function easyassist_show_agent_joining_modal(el) {
        document.getElementById("easyassist_agent_joining_modal").style.display = "flex";
    }

    function easyassist_hide_agent_information_modal(el) {
        document.getElementById("easyassist-agent-information-modal").style.display = "none";
    }

    function easyassist_show_agent_information_modal(el) {
        document.getElementById("easyassist-agent-information-modal").style.display = "flex";
    }

    function hide_easyassist_cobrowsing_request_meeting_modal(el) {
        document.getElementById("easyassist-co-browsing-request-meeting-modal").style.display = "none";
    }
    
    function hide_easyassist_voip_with_video_calling_request_modal(el) {
        document.getElementById("easyassist-voip-video-calling-request-modal").style.display = "none";
    }

    function hide_easyassist_voip_calling_request_modal(el) {
        document.getElementById("easyassist-voip-calling-request-modal").style.display = "none";
    }

    function easyassist_add_request_assist_modal() {
    	var request_modal_html
    	if (EASYASSIST_COBROWSE_META.enable_verification_code_popup == true) {
    		request_modal_html = [
	        	'<div id="easyassist-co-browsing-request-assist-modal" class="easyassist-customer-verification-modal" >',
	        		'<div class="easyassist-customer-connect-modal-content">',
	        			'<div class="easyassist-customer-connect-modal-header">',
	        				'<div style="display:flex;align-items:center;flex-direction:column;">',
		        				'<h6 style="padding-bottom:12px;">Verification Code</h6>',
		        				'<div class="easyassist-customer-verification-icon-wrapper">',
			        				'<div class="easyassist-customer-verification-icon">',
			        					'<svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">',
											'<path d="M33.3585 8.31703C33.2087 8.15026 33.0252 8.01542 32.8195 7.92095C32.6138 7.82649 32.3904 7.77443 32.1631 7.76803C28.6323 7.67803 24.1646 3.99703 21.2108 2.55253C19.3862 1.66303 18.1816 1.07653 17.277 0.922034C17.0933 0.895938 16.9066 0.896443 16.7231 0.923534C15.8185 1.07803 14.6139 1.66453 12.7908 2.55403C9.83695 3.99703 5.36926 7.67803 1.83849 7.76803C1.61106 7.77476 1.38747 7.82696 1.18158 7.9214C0.97569 8.01583 0.791888 8.15049 0.641566 8.31703C0.329986 8.66073 0.169227 9.10995 0.193874 9.56803C0.952335 24.6025 6.48311 33.907 16.1877 39.3145C16.44 39.454 16.72 39.526 16.9985 39.526C17.277 39.526 17.557 39.454 17.8108 39.3145C27.5154 33.907 33.0446 24.6025 33.8046 9.56803C33.8307 9.11002 33.6704 8.66047 33.3585 8.31703ZM25.6416 14.23L17.4523 26.0125C17.1585 26.4355 16.697 26.716 16.24 26.716C15.7816 26.716 15.2723 26.4715 14.9508 26.158L9.17849 20.5285C8.99003 20.3441 8.88422 20.0944 8.88422 19.834C8.88422 19.5737 8.99003 19.324 9.17849 19.1395L10.6046 17.746C10.7942 17.563 11.0502 17.4603 11.317 17.4603C11.5837 17.4603 11.8397 17.563 12.0293 17.746L15.7831 21.406L22.3046 12.0205C22.4555 11.8058 22.6875 11.6579 22.9498 11.6093C23.2121 11.5607 23.4834 11.6152 23.7046 11.761L25.3739 12.865C25.5944 13.0119 25.7463 13.2379 25.7965 13.4937C25.8467 13.7495 25.791 14.0142 25.6416 14.23Z" fill="#00DB3D"/>',
										'</svg>',
			        				'</div>',
			        			'</div>',
	        				'</div>',
	        			'</div>',
	        			'<div class="easyassist-customer-connect-modal-body">',
	        				'<div class="easyassist-customer-connect-modal-content-wrapper" style="text-align:center;padding-top:0!important;">',
	        					EASYASSIST_COBROWSE_META.assist_message,
	        				'</div>',
	        				'<div class="easyassist-customer-connect-modal-content-wrapper" style="text-align:center;padding-top:0!important;">',
						    	'Please enter Support Code shared by the Expert',
						    '</div>',
			    			'<div class="easyassist-customer-connect-modal-content-wrapper" style="text-align:center;">',
                                '<div style="border-color: #E6E6E6;">',
    			    				'<input class="easyassist-verfication-otp-input" type="number" onfocus="easyassist_verification_input_color_change(this);" autocomplete="off">',
    			    				'<input class="easyassist-verfication-otp-input" type="number" onfocus="easyassist_verification_input_color_change(this);" autocomplete="off">',
    			    				'<input class="easyassist-verfication-otp-input" type="number" onfocus="easyassist_verification_input_color_change(this);" autocomplete="off">',
    			    				'<input class="easyassist-verfication-otp-input" type="number" onfocus="easyassist_verification_input_color_change(this);" autocomplete="off">',
                                '</div>',
			    				'<label id="easyassist-request-assist-otp-error"></label>',
			    			'</div>',
	        			'</div>',
	        			'<div class="easyassist-customer-connect-modal-footer">',
	        				'<div style="padding-top: 1em;">',
		        				'<button class="easyassist-modal-cancel-btn" onclick="easyassist_update_agent_assistant_request(\'false\')" id="easyassist-verification-cancel-btn">Cancel</button>',
		                		'<button class="easyassist-modal-primary-btn" onclick="easyassist_update_agent_assistant_request(\'true\')" id="easyassist-verify-button">Allow</button>',
		                	'</div>',
	        			'</div>',
	        		'</div>',
	        	'</div>'
	        ].join('');
    	} else {
			request_modal_html = [
	        	'<div id="easyassist-co-browsing-request-assist-modal" class="easyassist-customer-verification-modal" >',
	        		'<div class="easyassist-customer-connect-modal-content">',
	        			'<div class="easyassist-customer-connect-modal-header">',
	        				'<h6 style="padding-bottom:12px; text-align: center;">Connect with our Experts</h6>',
        				'</div>',
	        			'<div class="easyassist-customer-connect-modal-body">',
	        				'<div class="easyassist-customer-connect-modal-content-wrapper" style="text-align:center;padding-top:0!important;">',
	        					EASYASSIST_COBROWSE_META.assist_message,
	        				'</div>',
	        			'</div>',
	        			'<div class="easyassist-customer-connect-modal-footer">',
	        				'<div style="padding-top: 1em;">',
		        				'<button class="easyassist-modal-cancel-btn" onclick="easyassist_update_agent_assistant_request(\'false\')" id="easyassist-verification-cancel-btn">Cancel</button>',
		                		'<button class="easyassist-modal-primary-btn" onclick="easyassist_update_agent_assistant_request(\'true\')" id="easyassist-verify-button">Allow</button>',
		                	'</div>',
	        			'</div>',
	        		'</div>',
	        	'</div>'
	        ].join('');
	    }

        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', request_modal_html);
        document.getElementById("easyassist-verify-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
        document.getElementById("easyassist-verification-cancel-btn").style.setProperty(
            'color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');

        var verify_inputs = document.getElementsByClassName('easyassist-verfication-otp-input');
        for(let idx = 0; idx < verify_inputs.length; idx ++) {
            verify_inputs[idx].addEventListener('keyup', function(e) {
                if(e.key == 'Backspace') {
                    if(this.previousSibling) {
                        this.previousSibling.focus();
                    }
                    if(e.target != document.getElementsByClassName('easyassist-verfication-otp-input')[0]) {
                        e.target.style.color = "inherit";
                        e.target.style.borderColor = "inherit";
                    }
                } else if(e.key >= '0' && e.key <= '9') {
                    keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                    if (keys.indexOf(this.value) != -1) {
                        if(this.nextSibling) {
                            this.nextSibling.focus();
                        }
                    }
                }
            });

            verify_inputs[idx].addEventListener('keydown', function(e) {
                if(e.key >= 0 && e.key <= 9) {
                    if(this.value.length + 1 > 1) {
                        if(this.nextSibling) {
                            this.nextSibling.focus();
                        } else {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                } else if(e.key == "ArrowDown" || e.key == "ArrowUp") {
                    e.preventDefault();
                    e.stopPropagation();
                } else if(e.key == "-" || e.key == "_" || e.key == "+" || e.key == "=" || e.key == "e" || e.key == "E") {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });

            verify_inputs[idx].addEventListener('paste', function(e) {
                var regex_code = /^[0-9]{4}$/g;
                var clipboard_data = e.clipboardData || e.originalEvent.clipboardData || window.clipboardData;
                var pasted_data = clipboard_data.getData('text');

                if(idx == 0) {
                    if(regex_code.test(pasted_data)){
                        for(var index = 0; index < verify_inputs.length; index ++) {
                            verify_inputs[index].value = pasted_data[index];
                            verify_inputs[index].focus();
                        }
                    }
                }
                e.preventDefault();
                e.stopPropagation();
            });
        }
    }

    function easyassist_add_request_meeting_modal() {
        var meeting_modal_html = [
            '<div id="easyassist-co-browsing-request-meeting-modal" class="easyassist-customer-connect-modal">',
                '<div class="easyassist-customer-connect-modal-content">',
                    '<div class="easyassist-customer-connect-modal-header">',
                        '<h6>Connect with our Experts</h6>',
                    '</div>',
                    '<div class="easyassist-customer-connect-modal-body">',
                        EASYASSIST_COBROWSE_META.meeting_message,
                        '<label id="easyassist-request-meeting-error"></label>',
                    '</div>',
                    '<div class="easyassist-customer-connect-modal-footer">',
                        '<button class="easyassist-modal-cancel-btn" onclick="easyassist_update_agent_meeting_request(\'false\')" style="color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">Decline</button>',
                        '<button class="easyassist-modal-primary-btn" onclick="easyassist_update_agent_meeting_request(\'true\')" id="easyassist-meeting-connect-button">Connect</button>',
                    '</div>',
                '</div>',
            '</div>',
        ].join('');

        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', meeting_modal_html);
        document.getElementById("easyassist-meeting-connect-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
    }

    function easyassist_add_voip_with_video_calling_request_modal() {
        var meeting_modal_html = [
            '<div id="easyassist-voip-video-calling-request-modal" class="easyassist-customer-connect-modal">',
                '<div class="easyassist-customer-connect-modal-content">',
                    '<div class="easyassist-customer-connect-modal-header">',
                        '<h6>',
                            '<span class="easyassist-svg-wrapper" style="background-color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">',
                                '<svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                    '<path d="M11.9 9.20003C11.9 10.5515 10.6632 11.6471 9.1375 11.6471H2.7625C1.23681 11.6471 0 10.5515 0 9.20003V2.80003C0 1.44855 1.23681 0.352966 2.7625 0.352966H9.1375C10.6632 0.352966 11.9 1.44855 11.9 2.80003V9.20003ZM16.7977 1.40207C16.9283 1.5382 17 1.71103 17 1.88969V10.1102C17 10.526 16.6194 10.8631 16.15 10.8631C15.9483 10.8631 15.7532 10.7996 15.5995 10.6839L12.75 8.53814V3.46106L15.5995 1.31597C15.9572 1.04667 16.4937 1.08521 16.7977 1.40207Z" fill="white"/>',
                                '</svg>',
                            '</span>',
                            'Video Call',
                        '</h6>',
                    '</div>',
                    '<div class="easyassist-customer-connect-modal-body"  style="padding-top: 1.5em!important; min-height: 5em!important;">',
                        EASYASSIST_COBROWSE_META.voip_with_video_calling_message,
                        '<label id="easyassist-voip-with-video-meeting-error"></label>',
                    '</div>',
                    '<div class="easyassist-customer-connect-modal-footer">',
                        '<button class="easyassist-modal-cancel-btn" onclick="easyassist_update_agent_meeting_request(\'false\')" style="color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">No</button>',
                        '<button class="easyassist-modal-primary-btn" onclick="easyassist_update_agent_meeting_request(\'true\')"  style="background-color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">Yes</button>',
                    '</div>',
                '</div>',
            '</div>',
        ].join('');

        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', meeting_modal_html);
    }

    function easyassist_add_voip_calling_request_modal() {
        var voip_modal_html = [
            '<div id="easyassist-voip-calling-request-modal" class="easyassist-customer-connect-modal">',
                '<div class="easyassist-customer-connect-modal-content">',
                    '<div class="easyassist-customer-connect-modal-header">',
                        '<h6>',
                            '<span class="easyassist-svg-wrapper" style="background-color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">',
                                '<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                    '<path d="M13.7528 9.33678C12.7881 9.33678 11.8548 9.19851 10.9842 8.94962C10.8478 8.90887 10.7011 8.90282 10.561 8.93217C10.4209 8.96152 10.293 9.02507 10.192 9.11555L8.96064 10.4775C6.74103 9.54419 4.6626 7.78123 3.55672 5.75555L5.08613 4.60789C5.2979 4.41431 5.36064 4.14468 5.27437 3.90271C4.98417 3.1353 4.83515 2.31259 4.83515 1.46222C4.83515 1.08888 4.48221 0.777771 4.05868 0.777771H1.34495C0.921425 0.777771 0.411621 0.943697 0.411621 1.46222C0.411621 7.88493 6.47437 13.2222 13.7528 13.2222C14.3097 13.2222 14.5293 12.7867 14.5293 12.4064V10.0212C14.5293 9.64789 14.1763 9.33678 13.7528 9.33678Z" fill="white"/>',
                                '</svg>',
                            '</span>',
                            'Audio Call',
                        '</h6>',
                    '</div>',
                    '<div class="easyassist-customer-connect-modal-body"  style="padding-top: 1.5em!important; min-height: 5em!important;">',
                        EASYASSIST_COBROWSE_META.voip_calling_message,
                        '<label id="easyassist-voip-meeting-error"></label>',
                    '</div>',
                    '<div class="easyassist-customer-connect-modal-footer">',
                        '<button class="easyassist-modal-cancel-btn" onclick="easyassist_update_agent_meeting_request(\'false\')" style="color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">No</button>',
                        '<button class="easyassist-modal-primary-btn" onclick="easyassist_update_agent_meeting_request(\'true\')"  style="background-color: ' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important">Yes</button>',
                    '</div>',
                '</div>',
            '</div>',
        ].join('');

        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', voip_modal_html);
    }

    function easyassist_add_request_edit_access_modal() {
    	var request_edit_access_modal_html = [
    		'<div id="easyassist-co-browsing-request-edit-access" class="easyassist-customer-connect-modal">',
    			'<div class="easyassist-customer-connect-modal-content">',
    				'<div class="easyassist-customer-connect-modal-body" style="text-align:center;">',
    					'Our Customer Service Agent has requested Edit Access to help you in filling the form. You can revoke edit access from the navigation bar. Would you like to allow?',
    				'</div>',
    				'<div class="easyassist-customer-connect-modal-footer">',
    				'<button class="easyassist-modal-cancel-btn" id="easyassist-edit-access-cancel-btn" onclick="easyassist_update_agent_request_edit_access(\'false\')">Deny</button>',
    				'<button class="easyassist-modal-primary-btn" id="easyassist-edit-access-allow-button" onclick="easyassist_update_agent_request_edit_access(\'true\')">Allow</button>',
    				'</div>',
    			'</div>',
    		'</div>',
    	].join('');
        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', request_edit_access_modal_html);
        document.getElementById("easyassist-edit-access-cancel-btn").style.setProperty(
            'color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
        document.getElementById("easyassist-edit-access-allow-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
    }

    function easyassist_add_feedback_form_modal() {
        var add_easyassist_feedback_form_html = [
            '<div id="easyassist-co-browsing-feedback-modal" class="easyassist-customer-feedback-modal" style="display: none;">',
                '<div class="easyassist-customer-feedback-modal-content">',
                    '<div class="easyassist-customer-feedback-modal-header">',
                        '<h6 style="padding-bottom: 1em!important; width:100%;" id="feedback-modal-header-text">Feedback</h6>',
                        '<div onclick="easyassist_hide_feedback_form()" ea_visible="true" style="cursor: pointer">',
                            '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                '<path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.5C0 5.14873 5.14873 0 11.5 0C17.8513 0 23 5.14873 23 11.5C23 17.8513 17.8513 23 11.5 23C5.14873 23 0 17.8513 0 11.5ZM16.1434 6.80013C16.5075 7.16427 16.5075 7.75465 16.1434 8.11879L12.7904 11.4718L16.1434 14.8247C16.5075 15.1889 16.5075 15.7792 16.1434 16.1434C15.7792 16.5075 15.1889 16.5075 14.8247 16.1434L11.4718 12.7904L8.11879 16.1434C7.75465 16.5075 7.16427 16.5075 6.80013 16.1434C6.43599 15.7792 6.43599 15.1889 6.80013 14.8247L10.1531 11.4718L6.80013 8.11879C6.43599 7.75465 6.43599 7.16427 6.80013 6.80013C7.16427 6.43599 7.75465 6.43599 8.11879 6.80013L11.4718 10.1531L14.8247 6.80013C15.1889 6.43599 15.7792 6.43599 16.1434 6.80013Z" fill="#717274" />',
                            '</svg>',
                        '</div>',
                    '</div>',
                    '<div class="easyassist-customer-feedback-modal-body">',
                        '<label>',
                            '<p style="font-size: 15px; text-align: left;">On a scale of 1-10, how likely are you to recommend Cobrowse to a friend or colleague?</p>',
                            '<div class="easyassist-tickmarks">',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 0)" onmouseout="easyassist_feedback_icon_color_change(this)">0</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 1)" onmouseout="easyassist_feedback_icon_color_change(this)">1</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 2)" onmouseout="easyassist_feedback_icon_color_change(this)">2</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 3)" onmouseout="easyassist_feedback_icon_color_change(this)">3</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 4)" onmouseout="easyassist_feedback_icon_color_change(this)">4</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 5)" onmouseout="easyassist_feedback_icon_color_change(this)">5</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 6)" onmouseout="easyassist_feedback_icon_color_change(this)">6</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 7)" onmouseout="easyassist_feedback_icon_color_change(this)">7</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 8)" onmouseout="easyassist_feedback_icon_color_change(this)">8</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 9)" onmouseout="easyassist_feedback_icon_color_change(this)">9</span>',
                                '<span onclick="easyassist_rate_agent(this);" onmouseover="easyassist_show_emoji_on_rating_change(this, 10)" onmouseout="easyassist_feedback_icon_color_change(this)">10</span>',
                            '</div>',
                        '</label>',
                        '<textarea id="easyassist-client-feedback" class="easyassist-feedbackComments" property="comment" cols="30" rows="5" placeholder="Remarks"></textarea>',
                        '<label id="easyassist-feedback-error" style="display: none;color:red;padding-top: 0.5em;"></label>',
                    '</div>',
                    '<div class="easyassist-customer-feedback-modal-footer">',
                        '<button class="easyassist-modal-cancel-btn" id="easyassist-feedback-nothanks-btn" onclick="easyassist_submit_client_feedback(\'no_feedback\')" type="button" data-dismiss="easyassist-modal">',
                            'No Thanks',
                        '</button>',
                        '<button class="easyassist-modal-primary-btn" id="easyassist-feedback-submit-button" onclick="easyassist_submit_client_feedback(\'feedback\')">',
                            'Submit',
                        '</button>',
                    '</div>',
                '</div>',
            '</div>',
        ].join('');

        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', add_easyassist_feedback_form_html);
        document.getElementById("easyassist-feedback-submit-button").style.setProperty(
            'background-color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
        document.getElementById("easyassist-feedback-nothanks-btn").style.setProperty(
            'color', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
    }

    function easyassist_add_agent_joining_modal(){
        var div_model = document.createElement("div");
        div_model.id = "easyassist_agent_joining_modal"
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";
        var modal_html = [
        	'<div class="easyassist-customer-connect-modal-content">',
        		'<div class="easyassist-customer-connect-modal-header">',
        			'<h6>Connect with our Experts</h6>',
        		'</div>',
        		'<div class="easyassist-customer-connect-modal-body">',
        			'Our Customer Support Agent will be connecting with you shortly. Please wait.',
        		'</div>',
        		'<div class="easyassist-customer-connect-modal-footer">',
        			'<button class ="easyassist-modal-primary-btn" onclick="easyassist_hide_agent_joining_modal(this)" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '!important;" >OK</button>',
        		'</div>',
        	'</div>',
        ].join('');
        div_model.innerHTML = modal_html;
        document.getElementsByTagName("body")[0].appendChild(div_model);
    }

    function easyassist_add_floating_sidenav_menu() {
        var sidenav_menu = "";
        if(EASYASSIST_COBROWSE_META.is_mobile == true){
            sidenav_menu = '<div class="easyassist-custom-nav-bar_wrapper" id="easyassist-sidenav-menu-id" style="display:none;">\
                <div class="easyassist-custom-nav-bar" id="easyassist-maximise-sidenav-button">\
                    <a href="javascript:void(0)" onclick="easyassist_show_dialog_modal();">\
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M8 8.00003C8.00046 8.23368 7.91908 8.46012 7.77 8.64003L2.77 14.64C2.60026 14.8442 2.35635 14.9727 2.09192 14.9971C1.8275 15.0214 1.56422 14.9398 1.36 14.77C1.15578 14.6003 1.02736 14.3564 1.00298 14.092C0.978601 13.8275 1.06026 13.5642 1.23 13.36L5.71 8.00003L1.39 2.64003C1.30694 2.53774 1.2449 2.42004 1.20747 2.29371C1.17004 2.16737 1.15795 2.03488 1.17189 1.90385C1.18582 1.77282 1.22552 1.64584 1.2887 1.5302C1.35187 1.41456 1.43727 1.31255 1.54 1.23003C1.64282 1.13845 1.76345 1.06909 1.89432 1.0263C2.0252 0.983505 2.1635 0.968203 2.30056 0.981345C2.43762 0.994488 2.5705 1.03579 2.69085 1.10268C2.81121 1.16956 2.91646 1.26058 3 1.37003L7.83 7.37003C7.95552 7.55511 8.01537 7.77693 8 8.00003Z"\
                        fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                    </svg>\
                    </a>\
                </div>\
            </div>';
        } else {
            sidenav_menu = '<div class="easyassist-custom-nav-bar_wrapper" id="easyassist-sidenav-menu-id" style="display:none;">\
              <div class="easyassist-custom-nav-bar" id="easyassist-sidenav-submenu-id" onmouseover="easyassist_on_client_mouse_over_nav_bar(this)" onmouseout="easyassist_on_mouse_out_nav_bar(this)">\
                <a href="javascript:void(0)" onclick="easyassist_close_sidenav();" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M11.6044 8L6.76923 3L1.93407 8L-4.37114e-08 7L6.76923 -2.95892e-07L13.5385 7L11.6044 8Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                  </svg>\
                  <label id="easyassist-icon-path-0-label">\
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                      <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                    </svg>\
                    <span>Minimise</span>\
                  </label>\
                </a>\
                <a href="javascript:void(0)" onclick="easyassist_show_livechat_iframe();easyassist_hide_feedback_form();" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path id="easyassist-icon-path-2"\
                      d="M11 1.83325C16.0625 1.83325 20.1666 5.93731 20.1666 10.9999C20.1666 16.0625 16.0625 20.1666 11 20.1666C9.49628 20.1666 8.04388 19.8035 6.74278 19.12L2.80991 20.1439C2.39349 20.2525 1.96797 20.0028 1.85951 19.5863C1.82597 19.4576 1.82596 19.3224 1.85948 19.1936L2.8828 15.2626C2.19741 13.9602 1.83331 12.5058 1.83331 10.9999C1.83331 5.93731 5.93737 1.83325 11 1.83325ZM12.1474 11.9166H8.02081L7.92752 11.9228C7.59195 11.9684 7.33331 12.256 7.33331 12.6041C7.33331 12.9521 7.59195 13.2398 7.92752 13.2854L8.02081 13.2916H12.1474L12.2407 13.2854C12.5763 13.2398 12.8349 12.9521 12.8349 12.6041C12.8349 12.256 12.5763 11.9684 12.2407 11.9228L12.1474 11.9166ZM13.9791 8.70825H8.02081L7.92752 8.71453C7.59195 8.76005 7.33331 9.04769 7.33331 9.39575C7.33331 9.74381 7.59195 10.0315 7.92752 10.077L8.02081 10.0833H13.9791L14.0725 10.077C14.408 10.0315 14.6666 9.74381 14.6666 9.39575C14.6666 9.04769 14.408 8.76005 14.0725 8.71453L13.9791 8.70825Z"\
                      fill="#2B2B2B" />\
                  </svg>\
                  <label id="easyassist-icon-path-2-label">\
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                      </svg>\
                    <span>Chat with the Agent</span>\
                  </label>\
                </a>\
                <a href="javascript:void(0)" onclick="easyassist_revoke_edit_access();" id="revoke-edit-access-button" style="display:none;" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path id="easyassist-icon-path-3" fill-rule="evenodd" clip-rule="evenodd" d="M19.2778 2.72247L19.1376 2.59012C17.8495 1.4431 15.8741 1.48722 14.6388 2.72247L13.7492 3.61155L18.3885 8.24989L19.2778 7.36141C20.5131 6.12616 20.5572 4.15082 19.4102 2.8627L19.2778 2.72247ZM12.7775 4.58321L17.4168 9.22249L16.5978 10.0415C15.7155 9.3843 14.6489 9 13.5 9C10.4624 9 8 11.6863 8 15C8 16.0668 8.25521 17.0686 8.70266 17.9366L8.30685 18.3324C8.05304 18.5862 7.73739 18.7694 7.39111 18.8638L2.70173 20.1427C2.18852 20.2827 1.7176 19.8117 1.85756 19.2986L3.13649 14.6092C3.23093 14.2629 3.4141 13.9473 3.66791 13.6934L12.7775 4.58321ZM5.98125 10.0832L4.60625 11.4582L2.52084 11.4586C2.14114 11.4586 1.83334 11.1508 1.83334 10.7711C1.83334 10.3914 2.14114 10.0836 2.52084 10.0836L5.98125 10.0832ZM9.64795 6.41656L8.27292 7.79156L2.52084 7.79194C2.14114 7.79194 1.83334 7.48414 1.83334 7.10444C1.83334 6.72475 2.14114 6.41694 2.52084 6.41694L9.64795 6.41656ZM11.9396 4.12488L13.3146 2.74989L2.52084 2.75028C2.14114 2.75028 1.83334 3.05808 1.83334 3.43778C1.83334 3.81748 2.14114 4.12528 2.52084 4.12528L11.9396 4.12488ZM19.0833 15.0417C19.0833 12.2572 16.8261 10 14.0417 10C11.2572 10 9 12.2572 9 15.0417C9 17.8261 11.2572 20.0833 14.0417 20.0833C16.8261 20.0833 19.0833 17.8261 19.0833 15.0417ZM14.6911 15.0418L16.3134 13.4204C16.4924 13.2414 16.4924 12.9512 16.3134 12.7722C16.1344 12.5933 15.8442 12.5933 15.6652 12.7722L14.0429 14.3936L12.4214 12.7721C12.2424 12.5932 11.9522 12.5932 11.7732 12.7721C11.5942 12.9511 11.5942 13.2413 11.7732 13.4203L13.3945 15.0416L11.7732 16.6619C11.5942 16.8409 11.5942 17.1311 11.7732 17.31C11.9522 17.4891 12.2424 17.4891 12.4214 17.31L14.0427 15.6898L15.665 17.3121C15.844 17.4911 16.1342 17.4911 16.3132 17.3121C16.4922 17.1331 16.4922 16.8429 16.3132 16.6639L14.6911 15.0418Z" fill="#2B2B2B"/>\
                    </svg>\
                    <label id="easyassist-icon-path-3-label">\
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                          </svg>\
                        <span>Revoke edit access</span>\
                    </label>\
                </a>\
                <a href="javascript:void(0)" onclick="easyassist_hide_feedback_form();easyassist_hide_livechat_iframe();easyassist_show_agent_information_modal();" id="show-agent-details-button" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\
                    <path id="easyassist-icon-path-4"\
                       d="M11 1.83325C16.0626 1.83325 20.1666 5.93731 20.1666 10.9999C20.1666 16.0625 16.0626 20.1666 11 20.1666C5.93737 20.1666 1.83331 16.0625 1.83331 10.9999C1.83331 5.93731 5.93737 1.83325 11 1.83325ZM11.1146 14.6666C10.7349 14.6666 10.4271 14.9744 10.4271 15.3541C10.4271 15.7338 10.7349 16.0416 11.1146 16.0416C11.4942 16.0416 11.8021 15.7338 11.8021 15.3541C11.8021 14.9744 11.4942 14.6666 11.1146 14.6666ZM11.1146 5.95825C9.57291 5.95825 8.24998 7.28036 8.24998 8.82284C8.24998 9.13927 8.50646 9.39575 8.8229 9.39575C9.09978 9.39575 9.33073 9.19936 9.38417 8.93829L9.39283 8.88141L9.39833 8.73516C9.44816 7.86199 10.2349 7.10409 11.1146 7.10409C12.0242 7.10409 12.8333 7.91231 12.8333 8.82284C12.8338 9.36688 12.6405 9.75784 12.091 10.3791L11.9961 10.4848L11.5253 10.988C10.7776 11.8005 10.4615 12.3613 10.4674 13.1811C10.4696 13.4975 10.728 13.7522 11.0443 13.75C11.3014 13.7481 11.5178 13.5772 11.5886 13.3435L11.6024 13.2885L11.6106 13.2315L11.6132 13.1729L11.6146 13.0988C11.6311 12.7318 11.7952 12.4178 12.2018 11.9499L12.2863 11.8542L12.7515 11.3561C13.6269 10.4129 13.9801 9.79409 13.9791 8.82229C13.9791 7.27922 12.6567 5.95825 11.1146 5.95825Z"/>\
                  </svg>\
                  <label id="easyassist-icon-path-4-label">\
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                          </svg>\
                        <span>Show agent details</span>\
                  </label>\
                </a>\
                 <hr style="color: black;width: 30px;margin: 0.3em auto;border: 0;border-top: 1px solid rgba(0,0,0,.1);">\
                 <a href="javascript:void(0)" onclick="easyassist_show_feedback_form();easyassist_hide_agent_information_modal();easyassist_hide_livechat_iframe();" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                   <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"\>\
                     <path id="easyassist-icon-path-1"\
                       d="M11 1.83325C16.0626 1.83325 20.1666 5.93731 20.1666 10.9999C20.1666 16.0625 16.0626 20.1666 11 20.1666C5.93737 20.1666 1.83331 16.0625 1.83331 10.9999C1.83331 5.93731 5.93737 1.83325 11 1.83325ZM14.2361 7.76378L14.159 7.69722C13.9198 7.51971 13.5914 7.51751 13.35 7.69064L13.2638 7.76378L11 10.0273L8.73612 7.76378L8.65901 7.69722C8.41977 7.51971 8.0914 7.51751 7.84997 7.69064L7.76384 7.76378L7.69728 7.84089C7.51977 8.08013 7.51757 8.40849 7.6907 8.64993L7.76384 8.73605L10.0274 10.9999L7.76384 13.2638L7.69728 13.3409C7.51977 13.5801 7.51757 13.9085 7.6907 14.1499L7.76384 14.2361L7.84095 14.3026C8.08019 14.4801 8.40855 14.4823 8.64999 14.3092L8.73612 14.2361L11 11.9725L13.2638 14.2361L13.341 14.3026C13.5802 14.4801 13.9086 14.4823 14.15 14.3092L14.2361 14.2361L14.3027 14.1589C14.4802 13.9197 14.4824 13.5913 14.3093 13.3499L14.2361 13.2638L11.9726 10.9999L14.2361 8.73605L14.3027 8.65895C14.4802 8.41971 14.4824 8.09134 14.3093 7.8499L14.2361 7.76378L14.159 7.69722L14.2361 7.76378Z"\
                       fill="#2B2B2B" />\
                   </svg>\
                   <label id="easyassist-icon-path-1-label">\
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                            <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                          </svg>\
                        <span>End Session</span>\
                   </label>\
                 </a>\
              </div>\
              <div class="easyassist-custom-nav-bar" id="easyassist-maximise-sidenav-button" style="display:none;">\
                  <a href="javascript:void(0)" onclick="easyassist_open_sidenav();" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">\
                      <path d="M1.93418 -5.07244e-07L6.76934 5L11.6045 -8.45407e-08L13.5386 1L6.76934 8L0.000113444 0.999999L1.93418 -5.07244e-07Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                    </svg>\
                    <label id="easyassist-icon-path-10-label">\
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                      </svg>\
                      <span>Maximise</span>\
                    </label>\
                  </a>\
              </div>';
        }
        if(EASYASSIST_COBROWSE_META.enable_voip_with_video_calling) {
            sidenav_menu += '\
                <div id="easyassist-cobrowse-voip-container" style="display: none;">\
                    <button class="easyassist-client-meeting-mic-btn" id="easyassist-client-meeting-mic-on-btn" type="button" onclick="easyassist_toggle_client_voice(this, true)" style="display: none;" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M1.33597 0.721564C1.16629 0.55188 0.891186 0.551878 0.721503 0.721557C0.551819 0.891237 0.551816 1.16635 0.721496 1.33603L4.07021 4.68481V6.38759C4.07021 7.66741 5.10771 8.70491 6.38753 8.70491C6.87038 8.70491 7.31874 8.55723 7.6899 8.30457L8.35376 8.96844C7.84603 9.34868 7.2155 9.5739 6.53236 9.5739H6.2427L6.11733 9.57136C4.4957 9.50562 3.20122 8.17019 3.20122 6.53242V6.24276L3.19725 6.1838C3.16848 5.97172 2.98669 5.80826 2.76672 5.80826C2.52676 5.80826 2.33223 6.00279 2.33223 6.24276V6.53242L2.33458 6.66934C2.40339 8.66902 3.9736 10.2874 5.95304 10.4323L5.95303 11.7464L5.957 11.8053C5.98577 12.0174 6.16756 12.1809 6.38753 12.1809C6.62749 12.1809 6.82203 11.9864 6.82203 11.7464L6.82259 10.4323C7.63306 10.3728 8.3749 10.0663 8.97313 9.58783L11.439 12.0537C11.6086 12.2234 11.8837 12.2234 12.0534 12.0537C12.2231 11.884 12.2231 11.6089 12.0534 11.4392L1.33597 0.721564ZM7.05738 7.67204C6.85706 7.77672 6.62921 7.83591 6.38753 7.83591C5.58764 7.83591 4.93921 7.18748 4.93921 6.38759V5.55382L7.05738 7.67204Z" fill="white"/>\
                          <path d="M7.83585 2.91162V5.9926L8.66436 6.82113C8.69094 6.68069 8.70484 6.53576 8.70484 6.38759V2.91162C8.70484 1.6318 7.66735 0.594299 6.38753 0.594299C5.31701 0.594299 4.41603 1.32021 4.14997 2.30665L4.93921 3.0959V2.91162C4.93921 2.11173 5.58764 1.46329 6.38753 1.46329C7.18742 1.46329 7.83585 2.11173 7.83585 2.91162Z" fill="white"/>\
                          <path d="M9.39781 7.55459L10.0617 8.21848C10.306 7.70796 10.4428 7.13617 10.4428 6.53242V6.24276L10.4389 6.1838C10.4101 5.97172 10.2283 5.80826 10.0083 5.80826C9.76837 5.80826 9.57384 6.00279 9.57384 6.24276V6.53242L9.5713 6.65779C9.55859 6.97128 9.49843 7.27254 9.39781 7.55459Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-5-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>Turn on microphone</span>\
                       </label>\
                    </button>\
                    <button class="easyassist-client-meeting-mic-btn" id="easyassist-client-meeting-mic-off-btn" type="button" onclick="easyassist_toggle_client_voice(this, false)" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M4.5 0C3.10203 0 1.96875 1.00736 1.96875 2.25001V6.25003C1.96875 7.49268 3.10203 8.50004 4.5 8.50004C5.89797 8.50004 7.03125 7.49268 7.03125 6.25003V2.25001C7.03125 1.00736 5.89797 0 4.5 0ZM2.8125 2.25001C2.8125 1.42158 3.56802 0.750004 4.5 0.750004C5.43198 0.750004 6.1875 1.42158 6.1875 2.25001V6.25003C6.1875 7.07846 5.43198 7.75004 4.5 7.75004C3.56802 7.75004 2.8125 7.07846 2.8125 6.25003V2.25001Z" fill="white"/>\
                          <path d="M0.84375 5.87527C0.84375 5.66817 0.65487 5.50027 0.421875 5.50027C0.18888 5.50027 0 5.66838 0 5.87548V6.24999C0 8.33268 1.79067 10.0436 4.07813 10.2327V11.625C4.07813 11.8321 4.26701 12 4.5 12C4.733 12 4.92188 11.8321 4.92188 11.625V10.2327C7.20934 10.0436 9 8.33268 9 6.24999V5.87528C9 5.66817 8.81112 5.50028 8.57812 5.50028C8.34513 5.50028 8.15625 5.6683 8.15625 5.8754V6.24999C8.15625 8.04492 6.51929 9.50001 4.5 9.50001C2.48071 9.50001 0.84375 8.04471 0.84375 6.24978V5.87527Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-6-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>Turn off microphone</span>\
                       </label>\
                    </button>\
                    <button class="easyassist-client-meeting-end-btn" type="button" onclick="easyassist_end_cobrowse_video_meet()" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="13" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M12.1528 3.3789L12.0384 3.97941C11.9313 4.54213 11.4055 4.92001 10.8098 4.86244L9.62424 4.74788C9.10762 4.69796 8.66745 4.33102 8.53601 3.84069L8.17026 2.47623C7.62889 2.25423 7.03222 2.15276 6.38025 2.17182C5.72828 2.19088 5.12184 2.32752 4.56093 2.58175L4.33437 3.85902C4.24849 4.34316 3.84901 4.70429 3.34307 4.75516L2.16441 4.87366C1.5763 4.93279 1.01242 4.55857 0.845229 3.99819L0.66606 3.39764C0.487718 2.79987 0.64687 2.17079 1.08386 1.74619C2.11552 0.743789 3.83556 0.241029 6.24398 0.237899C8.6559 0.234793 10.4295 0.734491 11.5648 1.73701C12.0424 2.15885 12.2661 2.78345 12.1528 3.3789Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-7-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>End Call</span>\
                       </label>\
                    </button>\
                    <button class="easyassist-client-meeting-mic-btn"  id="easyassist-client-meeting-video-on-btn" type="button" onclick="easyassist_toggle_client_video(this, true)" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M1.33573 1.06458C1.16605 0.894898 0.890942 0.894895 0.721258 1.06457C0.551575 1.23425 0.551572 1.50936 0.721252 1.67905L1.62904 2.58685C1.01503 2.89701 0.593994 3.53357 0.593994 4.26846V9.19276C0.593994 10.2326 1.43696 11.0756 2.47681 11.0756H7.40111C8.13596 11.0756 8.77249 10.6546 9.08267 10.0406L11.4387 12.3967C11.6084 12.5664 11.8835 12.5664 12.0532 12.3967C12.2229 12.227 12.2229 11.9519 12.0532 11.7823L1.33573 1.06458ZM8.40133 9.35927C8.32189 9.83997 7.90431 10.2066 7.40111 10.2066H2.47681C1.91689 10.2066 1.46299 9.75268 1.46299 9.19276V4.26846C1.46299 3.76522 1.82965 3.34761 2.3104 3.26823L8.40133 9.35927Z" fill="white"/>\
                          <path d="M8.41494 6.91496V4.26846C8.41494 3.70854 7.96103 3.25463 7.40111 3.25463H4.75468L3.88571 2.38564H7.40111C8.44096 2.38564 9.28393 3.22861 9.28393 4.26846V4.36868L11.5224 3.0258C11.812 2.85192 12.1806 3.06052 12.1806 3.39831V10.0617C12.1806 10.2364 12.0821 10.3765 11.9469 10.447L11.3116 9.81166V4.16598L9.28393 5.38338V7.78397L8.41494 6.91496Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-8-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>Turn on camera</span>\
                       </label>\
                    </button>\
                    <button class="easyassist-client-meeting-mic-btn"  id="easyassist-client-meeting-video-off-btn" type="button" onclick="easyassist_toggle_client_video(this, false)" style="display: none;" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M8.225 0C9.48145 0 10.5 1.06705 10.5 2.38333V2.5102L13.2048 0.810331C13.5547 0.590233 14 0.854285 14 1.28187V9.71667C14 10.1442 13.5548 10.4082 13.2049 10.1883L10.5 8.48833V8.61667C10.5 9.93295 9.48145 11 8.225 11H2.275C1.01855 11 0 9.93295 0 8.61667V2.38333C0 1.06705 1.01855 0 2.275 0H8.225ZM8.225 1.1H2.275C1.59845 1.1 1.05 1.67457 1.05 2.38333V8.61667C1.05 9.32543 1.59845 9.9 2.275 9.9H8.225C8.90155 9.9 9.45 9.32543 9.45 8.61667V2.38333C9.45 1.67457 8.90155 1.1 8.225 1.1ZM12.95 2.25361L10.5 3.79463V7.20526L12.95 8.74526V2.25361Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-9-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>Turn off camera</span>\
                       </label>\
                    </button>\
                    <button onclick="easyassist_toggle_meeting_iframe_visibility();" class="easyassist-show-cobrowse-meeting-btn">\
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">\
                        <path d="M10 10L5.9375 10L7.5 8.4375L5.625 6.5625L6.5625 5.625L8.4375 7.5L10 5.9375L10 10ZM3.4375 4.375L1.5625 2.5L-1.77578e-07 4.0625L0 -4.37114e-07L4.0625 -2.59536e-07L2.5 1.5625L4.375 3.4375L3.4375 4.375Z" fill="#B4B4B4"/>\
                      </svg>\
                    </button>\
                    <div id="easyassist-cobrowse-meeting-iframe-container" style="display: none;">\
                      <iframe style="width: 100%; height: 100%;" allow="camera *;microphone *">\
                      </iframe>\
                      <div class="easyassist-meeting-video-container">\
                        <video autoplay="true" id="easyassist-meeting-video-element">\
                        </video>\
                      </div>\
                    </div>\
                    <div class="easyassist-gy-loader easyassist-loader-container" id="easyassist-voip-loader" style="display: none;">\
                      <div>\
                        <div class="easyassist-line" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"></div>\
                        <div class="easyassist-line" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"></div>\
                        <div class="easyassist-line" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"></div>\
                      </div>\
                    </div>\
                </div>';
        } else if(EASYASSIST_COBROWSE_META.enable_voip_calling) {
            sidenav_menu += '\
                <div id="easyassist-cobrowse-voip-container" style="display: none;">\
                    <button class="easyassist-client-meeting-mic-btn" id="easyassist-client-meeting-mic-on-btn" type="button" onclick="easyassist_toggle_client_voice(this, true)" style="display: none;" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M1.33597 0.721564C1.16629 0.55188 0.891186 0.551878 0.721503 0.721557C0.551819 0.891237 0.551816 1.16635 0.721496 1.33603L4.07021 4.68481V6.38759C4.07021 7.66741 5.10771 8.70491 6.38753 8.70491C6.87038 8.70491 7.31874 8.55723 7.6899 8.30457L8.35376 8.96844C7.84603 9.34868 7.2155 9.5739 6.53236 9.5739H6.2427L6.11733 9.57136C4.4957 9.50562 3.20122 8.17019 3.20122 6.53242V6.24276L3.19725 6.1838C3.16848 5.97172 2.98669 5.80826 2.76672 5.80826C2.52676 5.80826 2.33223 6.00279 2.33223 6.24276V6.53242L2.33458 6.66934C2.40339 8.66902 3.9736 10.2874 5.95304 10.4323L5.95303 11.7464L5.957 11.8053C5.98577 12.0174 6.16756 12.1809 6.38753 12.1809C6.62749 12.1809 6.82203 11.9864 6.82203 11.7464L6.82259 10.4323C7.63306 10.3728 8.3749 10.0663 8.97313 9.58783L11.439 12.0537C11.6086 12.2234 11.8837 12.2234 12.0534 12.0537C12.2231 11.884 12.2231 11.6089 12.0534 11.4392L1.33597 0.721564ZM7.05738 7.67204C6.85706 7.77672 6.62921 7.83591 6.38753 7.83591C5.58764 7.83591 4.93921 7.18748 4.93921 6.38759V5.55382L7.05738 7.67204Z" fill="white"/>\
                          <path d="M7.83585 2.91162V5.9926L8.66436 6.82113C8.69094 6.68069 8.70484 6.53576 8.70484 6.38759V2.91162C8.70484 1.6318 7.66735 0.594299 6.38753 0.594299C5.31701 0.594299 4.41603 1.32021 4.14997 2.30665L4.93921 3.0959V2.91162C4.93921 2.11173 5.58764 1.46329 6.38753 1.46329C7.18742 1.46329 7.83585 2.11173 7.83585 2.91162Z" fill="white"/>\
                          <path d="M9.39781 7.55459L10.0617 8.21848C10.306 7.70796 10.4428 7.13617 10.4428 6.53242V6.24276L10.4389 6.1838C10.4101 5.97172 10.2283 5.80826 10.0083 5.80826C9.76837 5.80826 9.57384 6.00279 9.57384 6.24276V6.53242L9.5713 6.65779C9.55859 6.97128 9.49843 7.27254 9.39781 7.55459Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-5-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>Turn on microphone</span>\
                       </label>\
                    </button>\
                    <button class="easyassist-client-meeting-mic-btn" id="easyassist-client-meeting-mic-off-btn" type="button" onclick="easyassist_toggle_client_voice(this, false)" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M4.5 0C3.10203 0 1.96875 1.00736 1.96875 2.25001V6.25003C1.96875 7.49268 3.10203 8.50004 4.5 8.50004C5.89797 8.50004 7.03125 7.49268 7.03125 6.25003V2.25001C7.03125 1.00736 5.89797 0 4.5 0ZM2.8125 2.25001C2.8125 1.42158 3.56802 0.750004 4.5 0.750004C5.43198 0.750004 6.1875 1.42158 6.1875 2.25001V6.25003C6.1875 7.07846 5.43198 7.75004 4.5 7.75004C3.56802 7.75004 2.8125 7.07846 2.8125 6.25003V2.25001Z" fill="white"/>\
                          <path d="M0.84375 5.87527C0.84375 5.66817 0.65487 5.50027 0.421875 5.50027C0.18888 5.50027 0 5.66838 0 5.87548V6.24999C0 8.33268 1.79067 10.0436 4.07813 10.2327V11.625C4.07813 11.8321 4.26701 12 4.5 12C4.733 12 4.92188 11.8321 4.92188 11.625V10.2327C7.20934 10.0436 9 8.33268 9 6.24999V5.87528C9 5.66817 8.81112 5.50028 8.57812 5.50028C8.34513 5.50028 8.15625 5.6683 8.15625 5.8754V6.24999C8.15625 8.04492 6.51929 9.50001 4.5 9.50001C2.48071 9.50001 0.84375 8.04471 0.84375 6.24978V5.87527Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-6-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>Turn off microphone</span>\
                       </label>\
                    </button>\
                    <button class="easyassist-client-meeting-end-btn" type="button" onclick="easyassist_end_cobrowse_video_meet()" onmouseover="easyassist_show_tooltip(this)" onmouseout="easyassist_hide_tooltip(this)">\
                      <svg width="13" height="5" viewBox="0 0 13 5" fill="none" xmlns="http://www.w3.org/2000/svg">\
                          <path d="M12.1528 3.3789L12.0384 3.97941C11.9313 4.54213 11.4055 4.92001 10.8098 4.86244L9.62424 4.74788C9.10762 4.69796 8.66745 4.33102 8.53601 3.84069L8.17026 2.47623C7.62889 2.25423 7.03222 2.15276 6.38025 2.17182C5.72828 2.19088 5.12184 2.32752 4.56093 2.58175L4.33437 3.85902C4.24849 4.34316 3.84901 4.70429 3.34307 4.75516L2.16441 4.87366C1.5763 4.93279 1.01242 4.55857 0.845229 3.99819L0.66606 3.39764C0.487718 2.79987 0.64687 2.17079 1.08386 1.74619C2.11552 0.743789 3.83556 0.241029 6.24398 0.237899C8.6559 0.234793 10.4295 0.734491 11.5648 1.73701C12.0424 2.15885 12.2661 2.78345 12.1528 3.3789Z" fill="white"/>\
                      </svg>\
                      <label id="easyassist-icon-path-7-label">\
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\
                                <path d="M-2.62268e-07 6L7.5 0.803848L7.5 11.1962L-2.62268e-07 6Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>\
                              </svg>\
                            <span>End Call</span>\
                       </label>\
                    </button>\
                    <div id="easyassist-cobrowse-meeting-iframe-container" style="display: none;">\
                      <iframe style="width: 100%; height: 100%;" allow="camera *;microphone *">\
                      </iframe>\
                    </div>\
                    <div class="easyassist-gy-loader easyassist-loader-container" id="easyassist-voip-loader" style="display: none;">\
                      <div>\
                        <div class="easyassist-line" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"></div>\
                        <div class="easyassist-line" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"></div>\
                        <div class="easyassist-line" style="background-color:' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"></div>\
                      </div>\
                    </div>\
                </div>';
        }

        sidenav_menu += '</div>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', sidenav_menu);
        
        if(document.getElementById("easyassist-icon-path-1")){
            document.getElementById("easyassist-icon-path-1").style.fill = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-2")){
            document.getElementById("easyassist-icon-path-2").style.fill = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-3")){
            document.getElementById("easyassist-icon-path-3").style.fill = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-4")){
            document.getElementById("easyassist-icon-path-4").style.fill = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-1-label")){
            document.getElementById("easyassist-icon-path-1-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-2-label")){
            document.getElementById("easyassist-icon-path-2-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-3-label")){
            document.getElementById("easyassist-icon-path-3-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-4-label")){
            document.getElementById("easyassist-icon-path-4-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-5-label")) {
            document.getElementById("easyassist-icon-path-5-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-6-label")) {
            document.getElementById("easyassist-icon-path-6-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-7-label")) {
            document.getElementById("easyassist-icon-path-7-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-8-label")) {
            document.getElementById("easyassist-icon-path-8-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-9-label")) {
            document.getElementById("easyassist-icon-path-9-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-0-label")) {
            document.getElementById("easyassist-icon-path-0-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
        if(document.getElementById("easyassist-icon-path-10-label")) {
            document.getElementById("easyassist-icon-path-10-label").style.background = EASYASSIST_COBROWSE_META.floating_button_bg_color;
        }
    }

    function easyassisst_add_dialog_modal() {
        var div_model = document.createElement("div");
        div_model.id = "cobrowse-mobile-modal"
        div_model.style = "transition: opacity 1s ease-out;";
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";

        var modal_html = ['<div class="easyassist-customer-connect-modal-content" easyassist-data-scroll-x="0" easyassist-data-scroll-y="0" style="padding: 0px !important;">',
                '<div class="easyassist-customer-connect-modal-header" style="text-align: center; display: block !important; padding: 0.5rem 0.5rem 0 1rem!important;" easyassist-data-scroll-x="0" easyassist-data-scroll-y="0">',
                    '<button type="button" id="mobile-modal-hide-btn" onclick="easyassist_hide_dialog_modal();" class="hide-modal-btn"><svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">',
                        '<path d="M15 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1C16 1.26522 15.8946 1.51957 15.7071 1.70711C15.5196 1.89464 15.2652 2 15 2Z"',
                        'fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                        '</svg>',
                        '</button>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-body" style="padding: 1rem 1.2rem!important;" easyassist-data-scroll-x="0" easyassist-data-scroll-y="0">',
                    '<ul class="menu-items">',
                        '<li>',
                            '<div class="menu-item active-item">',
                                '<a href="javascript:void(0)" onclick="easyassist_hide_dialog_modal();easyassist_show_livechat_iframe();easyassist_hide_feedback_form()";>',
                                    '<svg width="26" height="26" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                        '<path d="M14.5001 0C22.508 0 29 6.49091 29 14.4978C29 22.5048 22.508 28.9957 14.5001 28.9957C12.1215 28.9957 9.82402 28.4215 7.76591 27.3404L1.54481 28.9598C0.886105 29.1316 0.213008 28.7367 0.0414436 28.0779C-0.0116107 27.8744 -0.0116264 27.6606 0.0413963 27.4569L1.66011 21.2396C0.575942 19.1798 0 16.8795 0 14.4978C0 6.49091 6.49189 0 14.5001 0ZM16.3151 15.9477H9.78752L9.63995 15.9575C9.10914 16.0296 8.70002 16.4845 8.70002 17.035C8.70002 17.5854 9.10914 18.0404 9.63995 18.1125L9.78752 18.1223H16.3151L16.4626 18.1125C16.9935 18.0404 17.4026 17.5854 17.4026 17.035C17.4026 16.4845 16.9935 16.0296 16.4626 15.9575L16.3151 15.9477ZM19.2125 10.8734H9.78752L9.63995 10.8833C9.10914 10.9553 8.70002 11.4102 8.70002 11.9607C8.70002 12.5112 9.10914 12.9662 9.63995 13.0382L9.78752 13.0481H19.2125L19.3602 13.0382C19.8909 12.9662 20.3 12.5112 20.3 11.9607C20.3 11.4102 19.8909 10.9553 19.3602 10.8833L19.2125 10.8734Z"',
                                        'fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                        '</svg>',
                                '</a>',
                            '</div>',
                            '<span>Chat with the Agent</span>',
                        '</li>',
                        '<li>',
                            '<div class="menu-item">',
                                '<a href="javascript:void(0)" onclick="easyassist_hide_dialog_modal();easyassist_revoke_edit_access();" id="revoke-edit-access-button">',
                                    '<svg width="26" height="26" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5384 1.46154L26.3251 1.2602C24.3656 -0.484696 21.3606 -0.417579 19.4814 1.46154L18.1281 2.81405L25.1856 9.8701L26.5384 8.5185C28.4176 6.63939 28.4847 3.63441 26.7398 1.67486L26.5384 1.46154ZM16.6499 4.29218L23.7074 11.3497L22.4615 12.5956C21.1193 11.5958 19.4967 11.0112 17.749 11.0112C13.128 11.0112 9.38214 15.0977 9.38214 20.1387C9.38214 21.7615 9.77038 23.2855 10.4511 24.606L9.84894 25.2081C9.46283 25.5942 8.98265 25.8729 8.45587 26.0165L1.32219 27.962C0.541473 28.175 -0.17491 27.4584 0.0380027 26.6779L1.98357 19.5442C2.12723 19.0174 2.40588 18.5373 2.79198 18.151L16.6499 4.29218ZM6.31113 12.659L4.21943 14.7507L1.04701 14.7513C0.469396 14.7513 0.00115825 14.2831 0.00115825 13.7055C0.00115825 13.1279 0.469396 12.6596 1.04701 12.6596L6.31113 12.659ZM11.8891 7.08116L9.79732 9.17287L1.04701 9.17345C0.469396 9.17345 0.00115825 8.70521 0.00115825 8.12759C0.00115825 7.54999 0.469396 7.08173 1.04701 7.08173L11.8891 7.08116ZM15.3752 3.59495L17.4669 1.50325L1.04701 1.50384C0.469396 1.50384 0.00115825 1.97208 0.00115825 2.5497C0.00115825 3.12732 0.469396 3.59556 1.04701 3.59556L15.3752 3.59495ZM26.2425 20.2021C26.2425 15.9662 22.8088 12.5324 18.573 12.5324C14.3371 12.5324 10.9034 15.9662 10.9034 20.2021C10.9034 24.4379 14.3371 27.8716 18.573 27.8716C22.8088 27.8716 26.2425 24.4379 26.2425 20.2021ZM19.5609 20.2023L22.0288 17.7357C22.3011 17.4634 22.3011 17.0219 22.0288 16.7496C21.7565 16.4775 21.3151 16.4775 21.0428 16.7496L18.5749 19.2162L16.1082 16.7495C15.8359 16.4773 15.3944 16.4773 15.1221 16.7495C14.8498 17.0218 14.8498 17.4633 15.1221 17.7356L17.5885 20.202L15.1221 22.6668C14.8498 22.9391 14.8498 23.3806 15.1221 23.6527C15.3944 23.9252 15.8359 23.9252 16.1082 23.6527L18.5746 21.188L21.0425 23.6559C21.3148 23.9282 21.7562 23.9282 22.0285 23.6559C22.3008 23.3836 22.3008 22.9422 22.0285 22.6699L19.5609 20.2023Z"',
                                        'fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                        '</svg>',
                                '</a>',
                            '</div>',
                            '<span>Revoke edit access</span>',
                        '</li>',
                        '<li>',
                            '<div class="menu-item">',
                                '<a href="javascript:void(0)" onclick="easyassist_hide_dialog_modal();easyassist_hide_feedback_form();easyassist_hide_livechat_iframe();easyassist_show_agent_information_modal();" id="show-agent-details-button">',
                                    '<svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                        '<path d="M16.0001 0C24.8366 0 32 7.16344 32 16C32 24.8365 24.8366 32 16.0001 32C7.16347 32 0 24.8365 0 16C0 7.16344 7.16347 0 16.0001 0ZM16.2001 22.4C15.5374 22.4 15.0001 22.9373 15.0001 23.6C15.0001 24.2628 15.5374 24.8 16.2001 24.8C16.8627 24.8 17.4001 24.2628 17.4001 23.6C17.4001 22.9373 16.8627 22.4 16.2001 22.4ZM16.2001 7.19999C13.5092 7.19999 11.2 9.50767 11.2 12.2C11.2 12.7523 11.6477 13.2 12.2 13.2C12.6833 13.2 13.0864 12.8572 13.1797 12.4015L13.1948 12.3022L13.2044 12.047C13.2914 10.5229 14.6646 9.2 16.2001 9.2C17.7878 9.2 19.2 10.6107 19.2 12.2C19.2009 13.1496 18.8635 13.832 17.9044 14.9164L17.7387 15.1009L16.917 15.9792C15.6119 17.3974 15.0601 18.3762 15.0704 19.8071C15.0743 20.3594 15.5253 20.804 16.0774 20.8001C16.5262 20.7968 16.9039 20.4985 17.0275 20.0906L17.0515 19.9946L17.0659 19.8951L17.0704 19.7928L17.0728 19.6635C17.1016 19.0229 17.3881 18.4748 18.0978 17.6581L18.2453 17.4911L19.0572 16.6217C20.5852 14.9754 21.2017 13.8953 21.2 12.199C21.2 9.50569 18.8918 7.19999 16.2001 7.19999Z"', 
                                        'fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                        '</svg>',
                                '</a>',
                            '</div>',
                            '<span>Show agent details</span>',
                        '</li>',
                    '</ul>',
                '</div>',
                '<div class="easyassist-customer-connect-modal-footer" easyassist-data-scroll-x="0" easyassist-data-scroll-y="0">',
                    '<div easyassist-data-scroll-x="0" easyassist-data-scroll-y="0"><button class="easyassist-modal-primary-btn end-session-btn" id="easyassist-co-browsing-connect-button" onclick="easyassist_hide_dialog_modal();easyassist_show_feedback_form();easyassist_hide_agent_information_modal();easyassist_hide_livechat_iframe();"',
                    'style="background-color:'+ EASYASSIST_COBROWSE_META.floating_button_bg_color + '">End Session</button></div>',
                '</div>',
            '</div>'].join('')
            div_model.innerHTML = modal_html;
            document.getElementsByTagName("body")[0].appendChild(div_model);
    }

    function easyassist_show_dialog_modal(){
        document.getElementById("cobrowse-mobile-modal").style.display = "flex";
        easyassist_hide_floating_sidenav_menu();
    }

    function easyassist_hide_dialog_modal() {
        document.getElementById("cobrowse-mobile-modal").style.display = "none";
        easyassist_show_floating_sidenav_menu();
    }

    function easyassist_show_floating_sidenav_menu() {
        if(document.getElementById("cobrowse-mobile-modal").style.display == "flex" ){
            return
        }
        document.getElementById("easyassist-sidenav-menu-id").style.display = "block";
        if(EASYASSIST_COBROWSE_META.is_mobile == true){
            if (get_easyassist_cookie("easyassist_edit_access_granted") == "true") {
                document.getElementById("revoke-edit-access-button").parentElement.parentElement.style.display = "inherit";
            } else {
                document.getElementById("revoke-edit-access-button").parentElement.parentElement.style.display = "none";
            }
        }else{
            if (get_easyassist_cookie("easyassist_edit_access_granted") == "true") {
                document.getElementById("revoke-edit-access-button").style.display = "inherit";
            } else {
                document.getElementById("revoke-edit-access-button").style.display = "none";
            }
        }
        easyassist_create_close_nav_timeout();
        easyassist_hide_floating_sidenav_button();
    }

    function easyassist_hide_floating_sidenav_menu() {
        document.getElementById("easyassist-sidenav-menu-id").style.display = "none";
    }

    function easyassist_close_sidenav() {
        try {
            document.getElementById("easyassist-sidenav-submenu-id").style.display = "none";
            document.getElementById("easyassist-maximise-sidenav-button").style.display = "flex";
        } catch(err) {}
    }

    function easyassist_open_sidenav() {
        try {
            document.getElementById("easyassist-maximise-sidenav-button").style.display = "none";
            document.getElementById("easyassist-sidenav-submenu-id").style.display = "flex";
        } catch(err) {}
    }

    function easyassist_on_client_mouse_over_nav_bar() {
        easyassist_clear_close_nav_timeout();
    }

    function easyassist_on_mouse_out_nav_bar() { 
        easyassist_create_close_nav_timeout();
    }

    function easyassist_create_close_nav_timeout(){
        if(easyassist_close_nav_timeout == null){
            easyassist_close_nav_timeout = setTimeout(easyassist_close_sidenav, 15*1000);
        }
    }

    function easyassist_clear_close_nav_timeout(){
        clearTimeout(easyassist_close_nav_timeout);
        easyassist_close_nav_timeout = null;
    }

    function easyassist_add_agent_information_modal(){
        var lighten_theme_color = easyassist_find_light_color(EASYASSIST_COBROWSE_META.floating_button_bg_color, 60);

        var div_model = document.createElement("div");
        div_model.id = "easyassist-agent-information-modal"
        div_model.style.display = "none";
        div_model.className = "easyassist-customer-connect-modal";
        var modal_html = [
        	'<div class="easyassist-customer-connect-modal-content">',
        		'<div class="easyassist-customer-connect-modal-header">',
        			'<div style="display:flex;align-items:center;flex-direction:column;">',
        				'<h6 style="padding-bottom:12px;">Agent Details</h6>',
        				'<div>',
        					'<svg width="76" height="70" viewBox="0 0 76 70" fill="none" xmlns="http://www.w3.org/2000/svg">',
                                '<path d="M56.6469 21.6467V23.2422H52.5453V21.6467C52.5453 11.9725 44.6744 4.10156 35.0002 4.10156C25.326 4.10156 17.4551 11.9725 17.4551 21.6467V23.2422H13.3535V21.6467C13.3535 9.71113 23.0633 0 35.0002 0C46.9371 0 56.6469 9.71113 56.6469 21.6467Z" fill="' + lighten_theme_color + '"/>',
                                '<path d="M56.6467 21.6467V23.2422H52.5451V21.6467C52.5451 11.9725 44.6742 4.10156 35 4.10156V0C46.9369 0 56.6467 9.71113 56.6467 21.6467Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                '<path d="M23.9653 33.9875H16.4496C14.5674 33.9875 13.0415 32.4616 13.0415 30.5794V24.5773C13.0415 22.6951 14.5674 21.1692 16.4496 21.1692H23.9653V33.9875Z" fill="' + lighten_theme_color + '"/>',
                                '<path d="M45.7607 33.9875H53.5502C55.4324 33.9875 56.9583 32.4616 56.9583 30.5794V24.5773C56.9583 22.6951 55.4324 21.1692 53.5502 21.1692H45.7607V33.9875Z" fill="' + lighten_theme_color + '"/>',
                                '<path d="M70 64.2017V69.9999H55.8783L53.8275 67.9492L51.7768 69.9999H18.2232L16.1725 67.9492L14.1217 69.9999H0V64.2017C0 61.6943 1.61055 59.4726 3.99219 58.6906L25.0004 51.8054H45.0584V51.8246L66.0078 58.6906C68.3895 59.4726 70 61.6943 70 64.2017Z" fill="' + lighten_theme_color + '"/>',
                                '<path d="M70 64.2017V69.9999H55.8783L53.8275 67.9492L51.7768 69.9999H35V51.8054H45.0584V51.8246L66.0078 58.6906C68.3895 59.4726 70 61.6943 70 64.2017Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                '<path d="M45.0585 41.8811V51.8055C45.0585 51.8055 39.9999 56.8053 35.0001 56.8053C30.0003 56.8053 25.0005 51.8055 25.0005 51.8055V41.8811H45.0585Z" fill="#FDFEDC"/>',
                                '<path d="M45.0584 41.8811V51.8055C45.0584 51.8055 39.9998 56.8053 35 56.8053V41.8811H45.0584Z" fill="#FDFEDC"/>',
                                '<path d="M47.9498 20.8797V25.1836L46.6209 26.615H23.3787L22.0498 25.1836V20.8797C22.0498 17.3031 23.499 14.0656 25.8424 11.7223C28.1857 9.37891 31.4232 7.92969 34.9998 7.92969C42.1516 7.92969 47.9498 13.7279 47.9498 20.8797Z" fill="#4D4D4D"/>',
                                '<path d="M47.95 20.8797V25.1836L46.6211 26.615H35V7.92969C42.1518 7.92969 47.95 13.7279 47.95 20.8797Z" fill="#4D4D4D"/>',
                                '<path d="M47.9498 25.1916V34.0605C47.9498 34.9752 47.8664 35.868 47.7065 36.732C47.5766 37.4361 45.7609 38.7828 45.7609 38.7828C45.7609 38.7828 46.6277 40.1814 46.2805 40.8336C44.0588 45.0199 39.8397 47.8459 34.9998 47.8459C31.4232 47.8459 28.1857 46.3037 25.8424 43.8086C23.499 41.3135 22.0498 37.8682 22.0498 34.0605V25.1916H28.9568C31.2824 25.1916 33.4029 24.3084 34.9998 22.8592C36.8127 21.2131 37.9516 18.8383 37.9516 16.1982C37.9516 21.1652 41.9779 25.1916 46.9449 25.1916H47.9498Z" fill="#FDFEDC"/>',
                                '<path d="M47.95 25.1916V34.0605C47.95 34.9752 47.8666 35.868 47.7066 36.732C47.5768 37.4361 45.7611 38.7828 45.7611 38.7828C45.7611 38.7828 46.6279 40.1814 46.2807 40.8336C44.059 45.0199 39.8398 47.8459 35 47.8459V22.8592C36.8129 21.2131 37.9518 18.8383 37.9518 16.1982C37.9518 21.1652 41.9781 25.1916 46.9451 25.1916H47.95Z" fill="#FDFEDC"/>',
                                '<path d="M47.7058 36.7322C47.4364 38.1964 46.9483 39.5759 46.2798 40.8337H37.3521V36.7322H47.7058Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                '<path d="M14.1211 63.7109H18.2227V70H14.1211V63.7109Z" fill="' + lighten_theme_color + '"/>',
                                '<path d="M51.7773 63.7109H55.8789V70H51.7773V63.7109Z" fill="' + EASYASSIST_COBROWSE_META.floating_button_bg_color + '"/>',
                                '<path d="M76 52.5L73.3382 49.4443L73.7091 45.4029L69.7709 44.5048L67.7091 41L64 42.599L60.2909 41L58.2291 44.4938L54.2909 45.381L54.6618 49.4333L52 52.5L54.6618 55.5557L54.2909 59.6081L58.2291 60.5062L60.2909 64L64 62.39L67.7091 63.989L69.7709 60.4952L73.7091 59.5971L73.3382 55.5557L76 52.5ZM61.1418 56.8919L58.5455 54.2633C58.4443 54.162 58.3641 54.0417 58.3093 53.9092C58.2546 53.7767 58.2264 53.6346 58.2264 53.4912C58.2264 53.3477 58.2546 53.2057 58.3093 53.0732C58.3641 52.9407 58.4443 52.8204 58.5455 52.719L58.6218 52.6424C59.0473 52.2152 59.7455 52.2152 60.1709 52.6424L61.9273 54.4167L67.5455 48.7652C67.9709 48.3381 68.6691 48.3381 69.0945 48.7652L69.1709 48.8419C69.5964 49.269 69.5964 49.959 69.1709 50.3862L62.7127 56.8919C62.2655 57.319 61.5782 57.319 61.1418 56.8919Z" fill="#12DB00"/>',
                            '</svg>',
        				'</div>',
        			'</div>',
        		'</div>',
        		'<div class="easyassist-customer-connect-modal-body">',
        			'<div class="easyassist-agent-information-text" id="easyassist-agent-information-agent-name">',
        			'</div>',
        			'<div class="easyassist-agent-information-text" id="easyassist-agent-information-agent-location">',
        			'</div>',
        			'<div class="easyassist-customer-connect-modal-content-wrapper">',
        				'<span class="easyassist-customer-connect-modal-small-text"> You are connected to an official agent </span>',
        				'<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">',
							'<path d="M13 6.5L11.5582 4.77286L11.7591 2.48857L9.62591 1.98095L8.50909 0L6.5 0.90381L4.49091 0L3.37409 1.97476L1.24091 2.47619L1.44182 4.76667L0 6.5L1.44182 8.22714L1.24091 10.5176L3.37409 11.0252L4.49091 13L6.5 12.09L8.50909 12.9938L9.62591 11.019L11.7591 10.5114L11.5582 8.22714L13 6.5ZM4.95182 8.98238L3.54545 7.49667C3.49068 7.4394 3.44722 7.37137 3.41756 7.29648C3.38791 7.22159 3.37265 7.14131 3.37265 7.06024C3.37265 6.97916 3.38791 6.89888 3.41756 6.82399C3.44722 6.74911 3.49068 6.68108 3.54545 6.62381L3.58682 6.58048C3.81727 6.33905 4.19545 6.33905 4.42591 6.58048L5.37727 7.58333L8.42045 4.38905C8.65091 4.14762 9.02909 4.14762 9.25955 4.38905L9.30091 4.43238C9.53136 4.67381 9.53136 5.06381 9.30091 5.30524L5.80273 8.98238C5.56045 9.22381 5.18818 9.22381 4.95182 8.98238Z" fill="#12DB00" fill-opacity="0.5"/>',
						'</svg>',
        			'</div>',
        		'</div>',
        		'<div class="easyassist-customer-connect-modal-footer" style="justify-content:center;">',
        			'<button class="easyassist-modal-primary-btn" id="easyassist-agent-info-modal-close-btn" onclick="easyassist_hide_agent_information_modal(this)">Close</button>',
        		'</div>',
        	'</div>',
        ].join('');
        div_model.innerHTML = modal_html;
        document.getElementsByTagName("body")[0].appendChild(div_model);
        document.getElementById("easyassist-agent-info-modal-close-btn").style.setProperty(
            'background', EASYASSIST_COBROWSE_META.floating_button_bg_color, 'important');
    }

    function easyassist_show_request_edit_access_form() {
        easyassist_hide_livechat_iframe();
        document.getElementById("easyassist-co-browsing-request-edit-access").style.display = "flex"
    }

    function easyassist_hide_request_edit_access_form() {
        document.getElementById("easyassist-co-browsing-request-edit-access").style.display = "none";
    }

    function easyassist_show_floating_sidenav_button() {

        if (get_easyassist_cookie("easyassist_session_id") != undefined) {
            if(EASYASSIST_COBROWSE_META.show_floating_button_after_lead_search == true){
                var easyassist_session_created_on = get_easyassist_cookie("easyassist_session_created_on");
                if(easyassist_session_created_on != undefined && easyassist_session_created_on != null){
                    if( easyassist_session_created_on == "request"){
                        return;
                    }
                }else{
                    return;
                }
            }else{
                return;
            }
        }

        if (EASYASSIST_COBROWSE_META.allow_connect_with_drop_link == true) {
            var first_index = window.location.href.indexOf("eadKey");
            if (first_index > 0) {
                easyassist_initialize_cobrowsing_using_drop_link();
                return;
            }
        }
        if (EASYASSIST_COBROWSE_META.show_floating_easyassist_button == false && EASYASSIST_COBROWSE_META.show_easyassist_connect_agent_icon == false) {
            return;
        }
        if (EASYASSIST_COBROWSE_META.enable_waitlist == true && EASYASSIST_COBROWSE_META.show_floating_button_on_enable_waitlist == false) {
            return;
        }
        if (easyassist_time_to_show_support_button() == false) {
            EASYASSIST_COBROWSE_META.agents_available = false;
            if(EASYASSIST_COBROWSE_META.show_only_if_agent_available == true) {
                easyassist_hide_floating_sidenav_button();
            } else {
                if(EASYASSIST_COBROWSE_META.enable_non_working_hours_modal_popup == true) {
                    if(document.getElementById("easyassist-non-working-hours-modal-id").style.display != "flex") {
                        document.getElementById("easyassist-side-nav-options-co-browsing").style.display = "inline-block";
                        document.getElementById("easyassist-side-nav-options-co-browsing").setAttribute("title", "");
                        document.getElementById("easyassist-side-nav-options-co-browsing").setAttribute("onclick", "easyassist_show_non_working_hour_modal()");
                    }
                } else {
                    document.getElementById("easyassist-side-nav-options-co-browsing").style.display = "inline-block";
                    document.getElementById("easyassist-side-nav-options-co-browsing").setAttribute("title", EASYASSIST_COBROWSE_META.message_on_non_working_hours);
                    document.getElementById("easyassist-side-nav-options-co-browsing").setAttribute("onclick", "easyassist_show_toast('" + EASYASSIST_COBROWSE_META.message_on_non_working_hours + "')");
                }
            }
            return;
        } else {
            EASYASSIST_COBROWSE_META.agents_available = undefined;
            document.getElementById("easyassist-side-nav-options-co-browsing").removeAttribute("title");
            document.getElementById("easyassist-side-nav-options-co-browsing").setAttribute("onclick", "easyassist_show_cobrowsing_modal()");
        }
        if (document.getElementById("easyassist-co-browsing-modal-id").style.display == "flex") {
            return;
        }
        if (document.getElementById("easyassist-product-category-modal-id").style.display == "flex") {
            return;
        }
        if (document.getElementById("easyassist-conection-modal-id").style.display == "flex"){
            return;
        }
        if(document.getElementById("easyassist-non-working-hours-modal-id").style.display == "flex") {
            return;
        }
        if (EASYASSIST_COBROWSE_META.show_only_if_agent_available == true) {
            easyassist_check_agent_available_status();
        } else if (EASYASSIST_COBROWSE_META.disable_connect_button_if_agent_unavailable == true) {
            easyassist_check_agent_available_status();
        } else {
            document.getElementById("easyassist-side-nav-options-co-browsing").style.display = "inline-block";
        }
    }

    function easyassist_hide_floating_sidenav_button() {
        document.getElementById("easyassist-side-nav-options-co-browsing").style.display = "none";
    }

    function easyassist_add_payment_consent_modal() {

        consent_element = document.querySelector("#easyassist-co-browsing-payment-consent-modal");
        if (consent_element != undefined && consent_element != null) {
            consent_element.remove();
        }
        const request_modal_html = '<div id="easyassist-co-browsing-payment-consent-modal" style="display: none;">\
          <div id="easyassist-co-browsing-modal-content" style="padding: 2em; text-align: center;">\
          <h4>Co-browsing Alert*</h4><hr>\
          <p style="text-align: justify;">Upon clicking on Pay button, you will be directed to payment gateway page to complete your transaction. For your security reasons, please note your co-browsing session will be paused during this session and our sales agent will not be able to view your details.</p><br>\
          <div style="display: flex;justify-content: center;">\
              <button onclick="easyassist_hide_payment_consent_modal(this)" style="background-color: #1b5e20; color: white; font-size: 0.8em; padding: 1.0em 2.0em 1.0em 2.0em; border-radius: 2em; border-style: none; float: right; margin-right: 5%;outline:none;">Ok</button>\
          </div>\
          </div>\
        </div>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', request_modal_html);
    }

    function easyassist_hide_payment_consent_modal(element) {
        document.getElementById("easyassist-co-browsing-payment-consent-modal").style.display = "none";
    }

    function easyassist_show_payment_consent_modal(element) {
        document.getElementById("easyassist-co-browsing-payment-consent-modal").style.display = "block";
    }

    function easyassist_auto_fetch_details(el) {
        var auto_fetch_fields = EASYASSIST_COBROWSE_META.auto_fetch_fields;
        for (var index = 0; index < auto_fetch_fields.length; index++) {
            var fetch_element = document.querySelectorAll('[' + auto_fetch_fields[index].fetch_field_key + '="' + auto_fetch_fields[index].fetch_field_value + '"]');
            var modal_element = document.querySelectorAll('[' + auto_fetch_fields[index].modal_field_key + '="' + auto_fetch_fields[index].modal_field_value + '"]');
            if (fetch_element != null && modal_element != null && fetch_element.length > 0 && modal_element.length > 0) {
                fetch_element = fetch_element[0];
                modal_element = modal_element[0];
                modal_element.value = fetch_element.value;
            }
        }
    }

    function easyassist_modal_event_handler(event) {
        var key = event.key || event.keyCode;
        if (key === 'Enter' || key === 'enter' || key === 13) {
            document.getElementById('easyassist-client-mobile-number').focus();
            document.getElementById('easyassist-client-mobile-number').select();
        }
    }

    function easyassist_show_browsing_modal(el) {
        document.getElementById("modal-cobrowse-connect-error").innerHTML = "";
        if(document.getElementById("modal-cobrowse-customer-name-error")) {
        	document.getElementById("modal-cobrowse-customer-name-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-customer-name-error").innerHTML = "";
        }
        if(document.getElementById("modal-cobrowse-customer-language-error")) {
        	document.getElementById("modal-cobrowse-customer-language-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-customer-language-error").innerHTML = "";
        }
        if(document.getElementById("modal-cobrowse-virtual-agent-code-error")) {
        	document.getElementById("modal-cobrowse-virtual-agent-code-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-virtual-agent-code-error").innerHTML = "";
        }
        if(document.getElementById("modal-cobrowse-customer-number-error")) {
        	document.getElementById("modal-cobrowse-customer-number-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-customer-number-error").innerHTML = "";
        }


        document.getElementById("easyassist-client-name").value = "";
        if (document.getElementById("easyassist-client-mobile-number") != null) {
            document.getElementById("easyassist-client-mobile-number").value = "";
        }

        if (document.getElementById("easyassist-client-agent-virtual-code") != null) {
            document.getElementById("easyassist-client-agent-virtual-code").value = "";
        }

        easyassist_auto_fetch_details();
        document.getElementById("easyassist-co-browsing-modal-id").style.display = "flex";
        document.getElementById('easyassist-client-name').focus();
        document.getElementById('easyassist-client-name').select();
        document.addEventListener('keydown', easyassist_modal_event_handler);
        easyassist_hide_floating_sidenav_button();
    }

    function easyassist_close_browsing_modal(el) {
        document.removeEventListener('keydown',easyassist_modal_event_handler);
        document.getElementById("easyassist-co-browsing-modal-id").style.display = "none";
        easyassist_show_floating_sidenav_button();
    }

    function easyassist_show_connection_modal(){
        document.getElementById("easyassist-conection-modal-id").style.display = "flex";
        setTimeout(function(){
            document.getElementById("easyassist-conection-modal-id").style.display = "none";
        },10000);
    }

    function easyassist_close_connection_modal(el) {
        document.getElementById("easyassist-conection-modal-id").style.display = "none";
    }

    function easyassist_show_product_category_modal() {
    	document.getElementById("easyassist-product-category-modal-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
        document.getElementById("easyassist-product-category-modal-error").innerHTML = "";
        document.getElementById("easyassist-product-category-modal-id").style.display = "flex";
        easyassist_hide_floating_sidenav_button();
        document.getElementById("easyassist-co-browsing-modal-id").style.display = "none";
    }

    function easyassist_close_product_category_modal() {
        document.getElementById("easyassist-product-category-modal-id").style.display = "none";
        easyassist_show_floating_sidenav_button();
    }

    function easyassist_accept_location_request(pos) {
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;
    }

    function easyassist_cancel_location_request(pos) {
        latitude = null;
        longitude = null;
    }

    function easyassist_initialize_cobrowsing_using_drop_link() {
        var first_index = window.location.href.indexOf("eadKey");
        if (first_index <= 0) return;
        var drop_link_key = window.location.href.substring(first_index);
        drop_link_key = drop_link_key.substring(drop_link_key.indexOf("=")+1).trim();
        if (drop_link_key == "") return;

        var url = window.location.href;
        url = url.substring(0, first_index-1);
        var title = url;
        if (document.querySelector("title") != null) {
            title = document.querySelector("title").innerHTML;
        }
        var description = "";
        if (document.querySelector("meta[name=description]") != null && document.querySelector("meta[name=description]") != undefined) {
            description = document.querySelector("meta[name=description]").content;
        }
        var request_id = easyassist_request_id();

        var easyassist_customer_id = get_easyassist_cookie("easyassist_customer_id");
        if (easyassist_customer_id == null || easyassist_customer_id == undefined) {
            easyassist_customer_id = "None";
        }

        json_string = JSON.stringify({
            "drop_link_key": drop_link_key,
            "request_id": request_id,
            "longitude": longitude,
            "latitude": latitude,
            "active_url": window.location.href,
            "customer_id": easyassist_customer_id,
            "meta_data": {
                "product_details": {
                    "title": title,
                    "description": description,
                    "url": url
                }
            }
        });

        encrypted_data = easyassist_custom_encrypt(json_string);
        encrypted_data = {
            "Request": encrypted_data
        };
        var params = JSON.stringify(encrypted_data);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/initialize-using-droplink/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-AccessToken', window.EASYASSIST_COBROWSE_META.access_token);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                response = easyassist_custom_decrypt(response.Response);
                response = JSON.parse(response);

                if (response.status == 200) {
                    set_easyassist_cookie("easyassist_session_id", response.session_id);
                    if(EASYASSIST_COBROWSE_META.show_verification_code_modal == false) {
                        set_easyassist_cookie("easyassist_cobrowsing_allowed", "true");
                        if(EASYASSIST_COBROWSE_META.allow_screen_sharing_cobrowse) {
                            easyassist_go_to_sceensharing_tab(EASYASSIST_COBROWSE_META);
                        }
                    } else {
                        set_easyassist_cookie("easyassist_cobrowsing_allowed", "false");
                    }

                    window.location.href = url;

                } else {
                    easyassist_show_toast("Cobrowsing session could not be initialized. Please try again.");
                }
            }
        }
        xhttp.send(params);
    }

    function easyassist_set_product_category() {
        window.EASYASSIST_PRODUCT_CATEGORY = "";
        var selected_product_category = "None";
        selected_product_category = document.getElementById("easyassist-inline-form-input-product-category").value;

        if (selected_product_category == "None" || selected_product_category == "") {
        	document.getElementById("easyassist-product-category-modal-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
            document.getElementById("easyassist-product-category-modal-error").innerHTML = "Please select a category";
            return;
        }
        window.EASYASSIST_PRODUCT_CATEGORY = selected_product_category;
        easyassist_close_product_category_modal();
        easyassist_show_browsing_modal();
    }

    function easyassist_connect_with_agent(event) {
    	document.getElementById("modal-cobrowse-connect-error").innerHTML = "";
        if(document.getElementById("modal-cobrowse-customer-name-error")) {
        	document.getElementById("modal-cobrowse-customer-name-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-customer-name-error").innerHTML = "";
        }

        if(document.getElementById("modal-cobrowse-customer-language-error")) {
        	document.getElementById("modal-cobrowse-customer-language-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-customer-language-error").innerHTML = "";
        }

        if(document.getElementById("modal-cobrowse-virtual-agent-code-error")) {
        	document.getElementById("modal-cobrowse-virtual-agent-code-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-virtual-agent-code-error").innerHTML = "";
        }

        if(document.getElementById("modal-cobrowse-customer-number-error")) {
        	document.getElementById("modal-cobrowse-customer-number-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
			document.getElementById("modal-cobrowse-customer-number-error").innerHTML = "";
        }

        var full_name = document.getElementById("easyassist-client-name").value;
        var mobile_number = "None";
        var regName = /^[a-zA-Z]+[a-zA-Z ]+$/;
        var regMob = /^[6-9]{1}[0-9]{9}$/;
        if (!regName.test(full_name)) {
        	document.getElementById("modal-cobrowse-customer-name-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
            document.getElementById("modal-cobrowse-customer-name-error").innerHTML = "Please enter valid name";
            return;
        }

        if (EASYASSIST_COBROWSE_META.ask_client_mobile == true || EASYASSIST_COBROWSE_META.ask_client_mobile == "true" || EASYASSIST_COBROWSE_META.ask_client_mobile == "True") {
            mobile_number = document.getElementById("easyassist-client-mobile-number").value;
            if (EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == true || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "true" || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "True") {
                if (!regMob.test(mobile_number)) {
                	document.getElementById("modal-cobrowse-customer-number-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
            		document.getElementById("modal-cobrowse-customer-number-error").innerHTML = "Please enter valid 10-digit mobile number";
                    return;
                }
            } else {
                if (mobile_number.trim() != "" && !regMob.test(mobile_number)) {
                	document.getElementById("modal-cobrowse-customer-number-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
            		document.getElementById("modal-cobrowse-customer-number-error").innerHTML = "Please enter valid 10-digit mobile number";
                    return;
                }
            }
        }
        var virtual_agent_code = "None";
        if (EASYASSIST_COBROWSE_META.allow_connect_with_virtual_agent_code) {
            virtual_agent_code = document.getElementById("easyassist-client-agent-virtual-code").value;
            if (virtual_agent_code.toString().trim() == "") {
            	document.getElementById("modal-cobrowse-virtual-agent-code-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
                document.getElementById("modal-cobrowse-virtual-agent-code-error").innerHTML = "Please enter valid agent code";
                return;
            }
        }

        var title = window.location.href;
        if (document.querySelector("title") != null) {
            title = document.querySelector("title").innerHTML;
        }
        var description = "";
        if (document.querySelector("meta[name=description]") != null && document.querySelector("meta[name=description]") != undefined) {
            description = document.querySelector("meta[name=description]").content;
        }
        var url = window.location.href;
        var request_id = easyassist_request_id();

        var easyassist_customer_id = get_easyassist_cookie("easyassist_customer_id");
        if (easyassist_customer_id == null || easyassist_customer_id == undefined) {
            easyassist_customer_id = "None";
        }

        var selected_language = -1;
        if (EASYASSIST_COBROWSE_META.allow_language_support == "true" || EASYASSIST_COBROWSE_META.allow_language_support == true || EASYASSIST_COBROWSE_META.allow_language_support == "True") {

            selected_language = document.getElementById("easyassist-inline-form-input-preferred-language").value;
        }

        if (selected_language == "None" || selected_language == "") {
        	document.getElementById("modal-cobrowse-customer-language-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
            document.getElementById("modal-cobrowse-customer-language-error").innerHTML = "Please select the preferred language";
            return;
        }

        var selected_product_category = -1;
        if (window.EASYASSIST_PRODUCT_CATEGORY != null && window.EASYASSIST_PRODUCT_CATEGORY != undefined && window.EASYASSIST_PRODUCT_CATEGORY.length > 0) {
            selected_product_category = window.EASYASSIST_PRODUCT_CATEGORY;
        }
        document.getElementById("easyassist-co-browsing-connect-button").disabled = true;

        json_string = JSON.stringify({
            "request_id": request_id,
            "name": full_name,
            "mobile_number": mobile_number,
            "longitude": longitude,
            "latitude": latitude,
            "selected_language": selected_language,
            "selected_product_category": selected_product_category,
            "active_url": window.location.href,
            "virtual_agent_code": virtual_agent_code,
            "customer_id": easyassist_customer_id,
            "meta_data": {
                "product_details": {
                    "title": title,
                    "description": description,
                    "url": url
                }
            }
        });

        encrypted_data = easyassist_custom_encrypt(json_string);
        encrypted_data = {
            "Request": encrypted_data
        };
        var params = JSON.stringify(encrypted_data);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/initialize/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-AccessToken', window.EASYASSIST_COBROWSE_META.access_token);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                response = easyassist_custom_decrypt(response.Response);
                response = JSON.parse(response);

                if (response.status == 200) {

                    set_easyassist_cookie("easyassist_session_created_on", "request");
                    if(get_easyassist_cookie("easyassist_session_id") != undefined){
                        easyassist_terminate_cobrowsing_session(show_message=false)
                    }

                    set_easyassist_cookie("easyassist_session_id", response.session_id);
                    set_easyassist_cookie("easyassist_request_timestamp", Date.now())

                    if (EASYASSIST_COBROWSE_META.allow_connect_with_virtual_agent_code == true || EASYASSIST_COBROWSE_META.show_verification_code_modal == false) {
                        set_easyassist_cookie("easyassist_cobrowsing_allowed", "true");
                        if(EASYASSIST_COBROWSE_META.allow_screen_sharing_cobrowse) {
                            easyassist_go_to_sceensharing_tab(EASYASSIST_COBROWSE_META);
                        }
                    }else{
                        set_easyassist_cookie("easyassist_cobrowsing_allowed", "false");
                    }

                    if (EASYASSIST_COBROWSE_META.show_connect_confirmation_modal) {
                        easyassist_show_connection_modal();
                    }
                    easyassist_close_browsing_modal();

                } else if (response.status == 103) {

                    document.getElementById("modal-cobrowse-connect-error").innerHTML = "Please enter code shared by our agent";

                } else{

                    console.error(response);

                }
            } else if (this.readyState == 4) {
                var description = "Initiate lead API (/easy-assist/initialize/) failed with status code " + this.status.toString();
            }
            document.getElementById("easyassist-co-browsing-connect-button").disabled = false;
        }
        xhttp.send(params);
    }

    function easyassist_save_non_working_hour_customer_details(event) {

        document.getElementById("modal-non-working-connect-error").innerHTML = "";
        if(document.getElementById("modal-non-working-customer-name-error")) {
            document.getElementById("modal-non-working-customer-name-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
            document.getElementById("modal-non-working-customer-name-error").innerHTML = "";
        }
        if(document.getElementById("modal-non-working-customer-number-error")) {
            document.getElementById("modal-non-working-customer-number-error").previousSibling.classList.remove('easyassist-customer-connect-input-error');
            document.getElementById("modal-non-working-customer-number-error").innerHTML = "";
        }

        var full_name = document.getElementById("modal-non-working-client-name").value;
        var mobile_number = "None";
        var regName = /^[a-zA-Z]+[a-zA-Z ]+$/;
        var regMob = /^[6-9]{1}[0-9]{9}$/;
        if (!regName.test(full_name)) {
            document.getElementById("modal-non-working-customer-name-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
            document.getElementById("modal-non-working-customer-name-error").innerHTML = "Please enter valid name";
            return;
        }

        if (EASYASSIST_COBROWSE_META.ask_client_mobile == true || EASYASSIST_COBROWSE_META.ask_client_mobile == "true" || EASYASSIST_COBROWSE_META.ask_client_mobile == "True") {
            mobile_number = document.getElementById("modal-non-working-client-mobile-number").value;
            if (EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == true || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "true" || EASYASSIST_COBROWSE_META.is_client_mobile_mandatory == "True") {
                if (!regMob.test(mobile_number)) {
                    document.getElementById("modal-non-working-customer-number-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
                    document.getElementById("modal-non-working-customer-number-error").innerHTML = "Please enter valid 10-digit mobile number";
                    return;
                }
            } else {
                if (mobile_number.trim() != "" && !regMob.test(mobile_number)) {
                    document.getElementById("modal-non-working-customer-number-error").previousSibling.classList.add('easyassist-customer-connect-input-error');
                    document.getElementById("modal-non-working-customer-number-error").innerHTML = "Please enter valid 10-digit mobile number";
                    return;
                }
            }
        }

        var title = window.location.href;
        if (document.querySelector("title") != null) {
            title = document.querySelector("title").innerHTML;
        }
        var description = "";
        if (document.querySelector("meta[name=description]") != null && document.querySelector("meta[name=description]") != undefined) {
            description = document.querySelector("meta[name=description]").content;
        }
        var url = window.location.href;
        var request_id = easyassist_request_id();

        var easyassist_customer_id = get_easyassist_cookie("easyassist_customer_id");
        if (easyassist_customer_id == null || easyassist_customer_id == undefined) {
            easyassist_customer_id = "None";
        }

        document.getElementById("modal-non-working-connect-button").disabled = true;

        json_string = JSON.stringify({
            "request_id": request_id,
            "name": full_name,
            "mobile_number": mobile_number,
            "longitude": longitude,
            "latitude": latitude,
            "active_url": window.location.href,
            "customer_id": easyassist_customer_id,
            "meta_data": {
                "product_details": {
                    "title": title,
                    "description": description,
                    "url": url
                }
            }
        });

        encrypted_data = easyassist_custom_encrypt(json_string);
        encrypted_data = {
            "Request": encrypted_data
        };
        var params = JSON.stringify(encrypted_data);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/save-non-working-hour-customer-details/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-AccessToken', window.EASYASSIST_COBROWSE_META.access_token);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                response = easyassist_custom_decrypt(response.Response);
                response = JSON.parse(response);

                if (response.status == 200) {

                    easyassist_show_toast("Thank you for submitting your request. We will contact you shortly.")
                    easyassist_close_non_working_hour_browsing_modal();

                } else if (response.status == 103) {

                    document.getElementById("modal-non-working-connect-error").innerHTML = "Please enter code shared by our agent";

                } else{

                    console.error(response);

                }
            } else if (this.readyState == 4) {
                var description = "Initiate lead API (/easy-assist/save-non-working-hour-customer-details/) failed with status code " + this.status.toString();
            }
            document.getElementById("modal-non-working-connect-button").disabled = false;
        }
        xhttp.send(params);
    }

    function easyassist_set_new_user() {
        var easyassist_customer_id = get_easyassist_cookie("easyassist_customer_id");
        if (easyassist_customer_id == null || easyassist_customer_id == undefined) {
            easyassist_customer_id = "None";
        }

        var full_name = "None";
        var mobile_number = "None";
        if (document.getElementById("easyassist-client-name") != null) {
            full_name = document.getElementById("easyassist-client-name").value.trim();
        }
        if (document.getElementById("easyassist-client-mobile-number") != null) {
            mobile_number = document.getElementById("easyassist-client-mobile-number").value.trim();
        }

        var title = window.location.href;
        if (document.querySelector("title") != null) {
            title = document.querySelector("title").innerHTML;
        }
        var description = "";
        if (document.querySelector("meta[name=description]") != null && document.querySelector("meta[name=description]") != undefined) {
            description = document.querySelector("meta[name=description]").content;
        }
        var url = window.location.href;

        json_string = JSON.stringify({
            "easyassist_customer_id": easyassist_customer_id,
            "full_name": full_name,
            "mobile_number": mobile_number,
            "active_url": window.location.href,
            "meta_data": {
                "product_details": {
                    "title": title,
                    "description": description,
                    "url": url
                }
            }
        });

        encrypted_data = easyassist_custom_encrypt(json_string);
        encrypted_data = {
            "Request": encrypted_data
        };
        var params = JSON.stringify(encrypted_data);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/set-easyassist-customer/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-AccessToken', window.EASYASSIST_COBROWSE_META.access_token);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                response = easyassist_custom_decrypt(response.Response);
                response = JSON.parse(response);
                if (response.status == 200) {
                    if (response.status == 200) {
                        var customer_id = response.customer_id;
                        set_easyassist_cookie("easyassist_customer_id", customer_id);
                    } else {
                        console.error(response);
                    }
                }
            } else if (this.readyState == 4) {
                var description = "easyassist_set_new_user api failed" + this.status.toString();
            }
        }
        xhttp.send(params);
    }

    function easyassist_show_toast(message) {
        var x = document.getElementById("easyassist-snackbar");
        x.innerHTML = message;
        x.className = "show";
        setTimeout(function() {
            x.className = x.className.replace("show", "");
        }, EASYASSIST_COBROWSE_META.toast_timeout);
    }

    function easyassist_copy_text_to_clipboard_sharable_link() {
        var copyText = document.getElementById("easychat_share_link_Model-content_link_wrapper");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

    function easyassist_ascii_to_hexa(str) {

        var temp_arr = [];
        for (var n = 0, l = str.length; n < l; n++) {
            var hex = Number(str.charCodeAt(n)).toString(16);
            temp_arr.push(hex);
        }
        return temp_arr.join('');
    }

    function easyassist_check_new_lead_data(title, description, url, easyassist_sync_data) {

        var meta_data = {
            "product_details": {
                "title": title,
                "description": description,
                "url": url
            },
            "easyassist_sync_data": easyassist_sync_data
        }

        old_encrypted_meta_data = easyassist_ascii_to_hexa(JSON.stringify(meta_data));
        var encrypted_meta_data = get_easyassist_cookie("encrypted_meta_data");
        return encrypted_meta_data == old_encrypted_meta_data
    }

    function easyassist_update_meta_data(title, description, url, easyassist_sync_data) {

        var meta_data = {
            "product_details": {
                "title": title,
                "description": description,
                "url": url
            },
            "easyassist_sync_data": easyassist_sync_data
        }

        encrypted_meta_data = easyassist_ascii_to_hexa(JSON.stringify(meta_data));
        set_easyassist_cookie("encrypted_meta_data", encrypted_meta_data);
    }

    function easyassist_sync_client_lead_data_at_server() {

        var easyassist_session_id = get_easyassist_cookie("easyassist_session_id");
        if (easyassist_session_id == null || easyassist_session_id == undefined) {
            easyassist_session_id = "None";
        }

        var title = window.location.href;
        if (document.querySelector("title") != null) {
            title = document.querySelector("title").innerHTML;
        }
        var description = "";
        if (document.querySelector("meta[name=description]") != null && document.querySelector("meta[name=description]") != undefined) {
            description = document.querySelector("meta[name=description]").content;
        }
        var url = window.location.href;

        primary_sync_elements = document.querySelectorAll("[easyassist-sync-element=\"primary\"]");
        if (primary_sync_elements.length <= 0) {
            return;
        }

        primary_value_list = [];

        for (var index = 0; index < primary_sync_elements.length; index++) {

            primary_value = primary_sync_elements[index].value.trim();

            if (primary_value != "") {

                primary_value_list.push(primary_value)
            }
        }
        if (primary_value_list.length <= 0) {
            return;
        }

        easyassist_sync_elements = document.querySelectorAll("[easyassist-sync-element]");
        if (easyassist_sync_elements.length == 0) {
            return;
        }

        var easyassist_sync_data = [];
        for (var index = 0; index < easyassist_sync_elements.length; index++) {
            easyassist_sync_data.push({
                "value": easyassist_sync_elements[index].value,
                "sync_type": easyassist_sync_elements[index].getAttribute("easyassist-sync-element"),
                "name": easyassist_sync_elements[index].getAttribute("easyassist-sync-element-label")
            });
        }

        if (easyassist_check_new_lead_data(title, description, url, easyassist_sync_data) && lead_capture_initialted) {

            return;
        }

        var selected_product_category = get_easyassist_cookie("easyassist_product_category");
        if (selected_product_category == null || selected_product_category == undefined || selected_product_category.length <=0 ) {
            selected_product_category = "-1"
        }

        lead_capture_initialted = true;

        easyassist_update_meta_data(title, description, url, easyassist_sync_data);

        var request_id = easyassist_request_id();

        json_string = JSON.stringify({
            "request_id": request_id,
            "primary_value_list": primary_value_list,
            "session_id": easyassist_session_id,
            "selected_product_category": selected_product_category,
            "meta_data": {
                "product_details": {
                    "title": title,
                    "description": description,
                    "url": url
                },
                "easyassist_sync_data": easyassist_sync_data
            }
        });

        encrypted_data = easyassist_custom_encrypt(json_string);
        encrypted_data = {
            "Request": encrypted_data
        };
        var params = JSON.stringify(encrypted_data);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/capture-lead/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-AccessToken', window.EASYASSIST_COBROWSE_META.access_token);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                response = easyassist_custom_decrypt(response.Response);
                response = JSON.parse(response);
                if (response.status == 200) {
                    if (easyassist_session_id == "None") {
                        set_easyassist_cookie("easyassist_session_id", response.session_id);
                        set_easyassist_cookie("easyassist_session_created_on", "lead");
                        if(EASYASSIST_COBROWSE_META.show_verification_code_modal == false) {
                            set_easyassist_cookie("easyassist_cobrowsing_allowed", "true");
                            if(EASYASSIST_COBROWSE_META.allow_screen_sharing_cobrowse) {
                                easyassist_go_to_sceensharing_tab(EASYASSIST_COBROWSE_META);
                            }
                        } else {
                            set_easyassist_cookie("easyassist_cobrowsing_allowed", "false");
                        }
                    }
                } else {
                    console.error(response);
                }
            } else if (this.readyState == 4) {
                var description = "Capture lead API (/easy-assist/capture-lead/) failed with status code " + this.status.toString();
            }
        }
        xhttp.send(params);
    }

    function easyassist_add_search_field_tag() {
        for (var search_tag in search_html_field) {
            form_elements = document.querySelectorAll(search_tag);
            for (var element_index = 0; element_index < form_elements.length; element_index++) {
                var element_id = form_elements[element_index].getAttribute("id");
                var element_name = form_elements[element_index].getAttribute("name");
                var element_react_id = form_elements[element_index].getAttribute("data-reactid");

                if (form_elements[element_index].type == "hidden") {
                    continue;
                }
                for (var search_index = 0; search_index < search_html_field[search_tag].length; search_index++) {
                    var search_element_id = search_html_field[search_tag][search_index]["id"];
                    var search_element_name = search_html_field[search_tag][search_index]["name"];
                    var search_element_primary = search_html_field[search_tag][search_index]["type"];
                    var search_element_react_id = search_html_field[search_tag][search_index]["data-reactid"];
                    var search_element_label = search_html_field[search_tag][search_index]["label"];
                    var search_element_key = search_html_field[search_tag][search_index]["key"];
                    var search_element_value = search_html_field[search_tag][search_index]["value"];

                    var element_value = form_elements[element_index].getAttribute(search_element_key);

                    if (element_value == search_element_value && search_element_value != undefined && search_element_value != null) {
                        form_elements[element_index].setAttribute("easyassist-sync-element", search_element_primary);
                        form_elements[element_index].setAttribute("easyassist-sync-element-label", search_element_label);
                    } else if (element_id == search_element_id && search_element_id != undefined && search_element_id != null) {
                        form_elements[element_index].setAttribute("easyassist-sync-element", search_element_primary);
                        form_elements[element_index].setAttribute("easyassist-sync-element-label", search_element_label);
                    } else if (element_name == search_element_name && search_element_name != undefined && search_element_name != null) {
                        form_elements[element_index].setAttribute("easyassist-sync-element", search_element_primary);
                        form_elements[element_index].setAttribute("easyassist-sync-element-label", search_element_label);
                    } else if (element_react_id == search_element_react_id && search_element_react_id != undefined && search_element_react_id != null) {
                        form_elements[element_index].setAttribute("easyassist-sync-element", search_element_primary);
                        form_elements[element_index].setAttribute("easyassist-sync-element-label", search_element_label);
                    }
                }
            }
        }

        easyassist_sync_client_lead_data_at_server();
    }

    function easyassist_check_element_is_hidden(element) {
        var element_computed_style = getComputedStyle(element);
        if(element_computed_style.display == "none") {
            return true;
        }
        if(element_computed_style.visibility == "hidden") {
            return true;
        }

        try {
            var client_rect = element.getClientRects()
            if(client_rect.length == 0) {
                return true;
            }
        } catch(err) {}

        if(element.offsetParent == null) {
            return true;
        }
        return false;
    }

    function easyassist_apply_custom_select(document_select_tag_list){
        for (var d_index = 0; d_index < document_select_tag_list.length; d_index++) {
            var s_element = document_select_tag_list[d_index];
            if(!easyassist_check_element_is_hidden(s_element)&&!easyassist_custom_select_remove_check(s_element)) {
                var obfuscated_field = easyassist_obfuscated_element_check(s_element);
                new EasyassistCustomSelect2(s_element, null, null, obfuscated_field);
            }
        }
    
        easyassist_custom_dropdown_applied = true;
    }

    function easyassist_create_cobrowsing_lead(primary_value, primary_name) {

        var easyassist_sync_data = [];

        var easyassist_session_id = get_easyassist_cookie("easyassist_session_id");

        if (easyassist_session_id == null || easyassist_session_id == undefined) {
            easyassist_session_id = "None";
        }

        var title = window.location.href;
        if (document.querySelector("title") != null) {
            title = document.querySelector("title").innerHTML;
        }
        var description = "";
        if (document.querySelector("meta[name=description]") != null && document.querySelector("meta[name=description]") != undefined) {
            description = document.querySelector("meta[name=description]").content;
        }
        var url = window.location.href;

        easyassist_sync_data.push({
            "value": primary_value,
            "sync_type": "primary",
            "name": primary_name
        });

        var request_id = easyassist_request_id();

        json_string = JSON.stringify({
            "request_id": request_id,
            "primary_value_list": [primary_value],
            "session_id": easyassist_session_id,
            "meta_data": {
                "product_details": {
                    "title": title,
                    "description": description,
                    "url": url
                },
                "easyassist_sync_data": easyassist_sync_data
            }
        });

        encrypted_data = easyassist_custom_encrypt(json_string);

        encrypted_data = {
            "Request": encrypted_data
        };

        var params = JSON.stringify(encrypted_data);

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/capture-lead/", true);
        xhttp.setRequestHeader('Content-Type', 'application/json');
        xhttp.setRequestHeader('X-AccessToken', window.EASYASSIST_COBROWSE_META.access_token);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                response = JSON.parse(this.responseText);
                response = easyassist_custom_decrypt(response.Response);
                response = JSON.parse(response);
                if (response.status == 200) {
                    if (easyassist_session_id == "None") {
                        set_easyassist_cookie("easyassist_session_id", response.session_id);
                        window.EASYASSIST_COBROWSE_META.is_lead_generated = true;
                        set_easyassist_cookie("easyassist_cobrowsing_allowed", "false");
                    }
                } else {
                    console.error(response);
                }
            } else if (this.readyState == 4) {
                var description = "Capture lead API (/easy-assist/capture-lead/) failed with status code " + this.status.toString();
            }
        }
        xhttp.send(params);
    }

    function easyassist_obfuscate(str, masking_type) {
        if (masking_type == null || masking_type == undefined) {
            masking_type = EASYASSIST_COBROWSE_META.masking_type;
        }
        if (masking_type == "partial-masking") {
            var start = 0;
            var mid = Math.round(str.length / 2);
            return str.substring(start, mid + 1).replace(/[a-zA-Z0-9@.]/g, 'X') + str.substring(mid + 1, );
        }
        if (masking_type == "full-masking") {
            return str.length <= 10 ? str.replace(/[a-zA-Z0-9@.]/g, 'X') : "XXXXXXXXXX";
        }
        return str;
    }

    function easyassist_create_livechat_iframe() {
        iframe = document.createElement("iframe");
        iframe.src = EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/easy-assist/sales-ai/client/livechat/?access_token=" + EASYASSIST_COBROWSE_META.access_token;
        iframe.id = "easyassist-livechat-iframe";
        iframe.style.display = "none";
        document.querySelector("body").appendChild(iframe);
    }

    function easyassist_add_agent_mouse_pointer() {
        var agent_mouse_pointer = document.createElement("img");
        agent_mouse_pointer.id = "agent-mouse-pointer";
        agent_mouse_pointer.style.top = "0%";
        agent_mouse_pointer.style.right = "0%";
        agent_mouse_pointer.style.position = "fixed";
        agent_mouse_pointer.style.width = "80px";
        agent_mouse_pointer.style.zIndex = "2147483647";
        agent_mouse_pointer.style.display = "none";
        if(window.EASYASSIST_COBROWSE_META.DEVELOPMENT == true){
            agent_mouse_pointer.src = EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/static/EasyAssistApp/img/Agent_cursor.svg"
        }else{
            agent_mouse_pointer.src = EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST + "/static/EasyAssistApp/img/" + EASYASSIST_COBROWSE_META.access_token + "/Agent_cursor.svg"
        }
        document.body.appendChild(agent_mouse_pointer);
    }

    function easyassist_show_livechat_iframe() {
        livechat_iframe = document.getElementById("easyassist-livechat-iframe");
        livechat_iframe_window = livechat_iframe.contentWindow;
        if (livechat_iframe != null && livechat_iframe != undefined) {
            document.getElementById("easyassist-livechat-iframe").style.display = "block";
            allincall_chatbot_window = document.getElementById("allincall-popup");
            if (allincall_chatbot_window != null && allincall_chatbot_window != undefined) {
                document.getElementById("allincall-popup").style.display = "none";
                document.getElementById("allincall-chat-box").style.display = "none";
            }
        }
        livechat_iframe_window.postMessage(JSON.stringify({
          "focus_textbox": "focus-textbox"
        }),EASYASSIST_HOST_PROTOCOL + "://" + EASYASSIST_COBROWSE_HOST);
    }

    function easyassist_hide_livechat_iframe() {
        livechat_iframe = document.getElementById("easyassist-livechat-iframe");
        if (livechat_iframe != null && livechat_iframe != undefined) {
            document.getElementById("easyassist-livechat-iframe").style.display = "none";
            allincall_chatbot_window = document.getElementById("allincall-popup");
            if (allincall_chatbot_window != null && allincall_chatbot_window != undefined) {
                document.getElementById("allincall-popup").style.display = "block";
                document.getElementById("allincall-chat-box").style.display = "none";
            }
        }
    }
    
    function easyassist_refresh_livechat_iframe() {
        livechat_iframe = document.getElementById("easyassist-livechat-iframe");
        if (livechat_iframe != null && livechat_iframe != undefined) {
            livechat_iframe.src = livechat_iframe.src;
        }
    }
    
    function easyassist_add_warning_element(reference_node){
        if(reference_node == null || reference_node == undefined)
            return;
        add_easyassist_event_listner_into_element(reference_node, 'focusin', easyassist_display_masked_field_warning);
        add_easyassist_event_listner_into_element(reference_node, 'focusout', easyassist_remove_masked_field_warning);
    }

    function easyassist_remove_warning_element(reference_node){
        if(reference_node == null || reference_node == undefined)
            return;
        reference_node.removeEventListener('focusin', easyassist_display_masked_field_warning);
        reference_node.removeEventListener('focusout', easyassist_remove_masked_field_warning); 
    }

    function easyassist_add_masked_field_tooltip(){
        var warning = document.createElement("span");
        warning.innerHTML = EASYASSIST_COBROWSE_META.masked_field_warning_text;
        warning.setAttribute("class", "easyassist-tooltiptext");
        warning.setAttribute("id", "easyassist-tooltip");
        warning.style.display = "none";
        warning.style.cursor = "default";
        warning.style.fontSize = "11px";
        document.getElementsByTagName("body")[0].appendChild(warning);
    }

    function easyassist_display_masked_field_warning(event){
        element = event.target;
        var dimensions = element.getBoundingClientRect();
        var warning_element =  document.getElementsByClassName("easyassist-tooltiptext")[0];
        if(warning_element == null || warning_element == undefined) {
            return;
        }
        warning_element.style.visibility = "visible";
        warning_element.style.opacity = "1";
        warning_element.style.left = (dimensions.left + element.offsetWidth/2 + window.pageXOffset - warning_element.offsetWidth/2) + "px";
        warning_element.style.top = (dimensions.top - warning_element.offsetHeight + window.pageYOffset - 6) + "px";
    }

    function easyassist_remove_masked_field_warning(){
        document.getElementsByClassName("easyassist-tooltiptext")[0].style.visibility = "hidden";
        document.getElementsByClassName("easyassist-tooltiptext")[0].style.opacity = "0";
    }

    function easyassist_get_node_visited_status(dom_node) {
        var easyassist_element_id = dom_node.getAttribute("easyassist-element-id");
        if(easyassist_visited_nodes_map[easyassist_element_id]) {
            if(easyassist_check_element_is_hidden(dom_node) != easyassist_visited_nodes_map[easyassist_element_id].is_hidden) {
                return "visibility_change";
            } else if(dom_node.className != easyassist_visited_nodes_map[easyassist_element_id].class) {
                return "class_change";
            } else if(dom_node.getAttribute('style') != easyassist_visited_nodes_map[easyassist_element_id].style) {
                return "style_change"
            } else if(dom_node.src != easyassist_visited_nodes_map[easyassist_element_id].src) {
                return "src_change";
            } else {
                return "no_change";
            }
        }
        console.log("should not be executed " + easyassist_element_id);
        return "element_not_exist"
    }

    function easyassist_show_cobrowsing_modal() {
        if (EASYASSIST_COBROWSE_META.choose_product_category == true) {
            easyassist_show_product_category_modal();
        } else {
            easyassist_show_browsing_modal();
        }
    }

    exports.easyassist_close_connection_modal = easyassist_close_connection_modal;
    exports.easyassist_screenshot_page = easyassist_screenshot_page;
    exports.easyassist_show_ripple_effect = easyassist_show_ripple_effect;
    exports.easyassist_hide_ripple_effect = easyassist_hide_ripple_effect;
    exports.easyassist_hide_floating_sidenav_button = easyassist_hide_floating_sidenav_button;
    exports.easyassist_show_floating_sidenav_button = easyassist_show_floating_sidenav_button;
    exports.easyassist_show_browsing_modal = easyassist_show_browsing_modal;
    exports.easyassist_close_browsing_modal = easyassist_close_browsing_modal;
    exports.easyassist_show_product_category_modal = easyassist_show_product_category_modal;
    exports.easyassist_close_product_category_modal = easyassist_close_product_category_modal;
    exports.easyassist_set_product_category = easyassist_set_product_category;
    exports.easyassist_connect_with_agent = easyassist_connect_with_agent;
    exports.easyassist_show_toast = easyassist_show_toast;
    exports.easyassist_copy_text_to_clipboard_sharable_link = easyassist_copy_text_to_clipboard_sharable_link;
    exports.easyassist_hide_feedback_form = easyassist_hide_feedback_form;
    exports.easyassist_show_feedback_form = easyassist_show_feedback_form;
    exports.easyassist_hide_agent_joining_modal = easyassist_hide_agent_joining_modal;
    exports.easyassist_show_agent_joining_modal = easyassist_show_agent_joining_modal;
    exports.easyassist_hide_agent_information_modal = easyassist_hide_agent_information_modal;
    exports.easyassist_show_agent_information_modal = easyassist_show_agent_information_modal;
    exports.easyassist_show_floating_sidenav_menu = easyassist_show_floating_sidenav_menu;
    exports.easyassist_hide_floating_sidenav_menu = easyassist_hide_floating_sidenav_menu;
    exports.easyassist_add_search_field_tag = easyassist_add_search_field_tag;
    exports.easyassist_parse_client_document = easyassist_parse_client_document;
    exports.easyassist_show_payment_consent_modal = easyassist_show_payment_consent_modal;
    exports.easyassist_hide_payment_consent_modal = easyassist_hide_payment_consent_modal;
    exports.easyassist_create_cobrowsing_lead = easyassist_create_cobrowsing_lead;
    exports.easyassist_obfuscate = easyassist_obfuscate;
    exports.easyassist_create_livechat_iframe = easyassist_create_livechat_iframe;
    exports.easyassist_show_livechat_iframe = easyassist_show_livechat_iframe;
    exports.easyassist_hide_livechat_iframe = easyassist_hide_livechat_iframe;
    exports.easyassist_refresh_livechat_iframe = easyassist_refresh_livechat_iframe;
    exports.easyassist_show_request_edit_access_form = easyassist_show_request_edit_access_form;
    exports.easyassist_hide_request_edit_access_form = easyassist_hide_request_edit_access_form;
    exports.easyassist_show_connection_modal = easyassist_show_connection_modal;
    exports.easyassist_close_connection_modal = easyassist_close_connection_modal;
    exports.easyassist_display_masked_field_warning = easyassist_display_masked_field_warning;
    exports.easyassist_remove_masked_field_warning = easyassist_remove_masked_field_warning;
    exports.easyassist_get_node_visited_status = easyassist_get_node_visited_status;
    exports.easyassist_visit_all_child_node = easyassist_visit_all_child_node;
    exports.easyassist_check_element_is_hidden = easyassist_check_element_is_hidden;
    exports.easyassist_check_dom_node = easyassist_check_dom_node;
    exports.easyassist_obfuscate_data_using_recursion = easyassist_obfuscate_data_using_recursion;
    exports.easyassist_set_value_attr_into_screenshot = easyassist_set_value_attr_into_screenshot;
    exports.easyassist_obfuscated_element_check = easyassist_obfuscated_element_check;
    exports.easyassist_open_sidenav = easyassist_open_sidenav;
    exports.easyassist_close_sidenav = easyassist_close_sidenav;
    exports.easyassist_on_client_mouse_over_nav_bar = easyassist_on_client_mouse_over_nav_bar;
    exports.easyassist_on_mouse_out_nav_bar = easyassist_on_mouse_out_nav_bar;
    exports.easyassist_clear_close_nav_timeout = easyassist_clear_close_nav_timeout;
    exports.easyassist_create_close_nav_timeout = easyassist_create_close_nav_timeout;
    exports.easyassist_show_non_working_hour_modal = easyassist_show_non_working_hour_modal;
    exports.easyassist_close_non_working_hour_browsing_modal = easyassist_close_non_working_hour_browsing_modal;
    exports.easyassist_save_non_working_hour_customer_details = easyassist_save_non_working_hour_customer_details;
    exports.easyassist_show_dialog_modal = easyassist_show_dialog_modal;
    exports.easyassist_hide_dialog_modal = easyassist_hide_dialog_modal;
    exports.easyassist_show_cobrowsing_modal = easyassist_show_cobrowsing_modal;

    easyassist_add_ripple_animation_frame();
    easyassist_add_floating_sidenav_button();
    easyassist_add_non_working_hour_modal();
    easyassist_add_product_category_modal();
    easyassist_add_floating_sidenav_menu();
    easyassist_add_feedback_form_modal();
    easyassist_add_agent_joining_modal();
    easyassist_add_request_assist_modal();
    easyassist_add_request_meeting_modal();
    easyassist_add_voip_with_video_calling_request_modal();
    easyassist_add_voip_calling_request_modal();
    easyassist_add_payment_consent_modal();
    easyassist_add_connection_modal();
    easyassist_create_livechat_iframe();
    easyassist_add_request_edit_access_modal();
    easyassist_add_agent_mouse_pointer();
    easyassist_add_masked_field_tooltip();
    easyassist_add_agent_information_modal();
    easyassisst_add_dialog_modal();
    set_easyassist_cookie("page_leave_status", "None");

    setInterval(function(e) {
        if (document.getElementById("easyassist-co-browsing-modal-id").style.display == "flex") {
            easyassist_set_new_user();
        }
    }, 5000);

    parse_dom_tree_interval = setInterval(function(e) {
        if(is_all_nodes_visited_for_first_time && is_recursive_call_ended == true) {
            is_recursive_call_ended = false;
            easyassist_convert_urls_to_absolute(document.images);
            easyassist_convert_urls_to_absolute(document.querySelectorAll("iframe"));
            easyassist_convert_urls_to_absolute(document.scripts);
            easyassist_create_value_attr_into_document();
            easyassist_parse_client_document(document.children[0]);
        }
    }, EASYASSIST_COBROWSE_META.cobrowsing_sync_html_interval);

    if (EASYASSIST_COBROWSE_META.lead_generation) {
        setInterval(function(e) {
            easyassist_add_search_field_tag();
        }, 5000);
        easyassist_add_search_field_tag();
    }

    setInterval(function(e) {
        easyassist_show_floating_sidenav_button();    
    }, 10000);

    if(get_easyassist_cookie("easyassist_page_visited") == undefined || get_easyassist_cookie("easyassist_page_visited") != window.location.href) {
        set_easyassist_cookie_with_path("easyassist_page_visited",window.location.href);
    }

    document.getElementsByClassName("easychat_share_link_Model-content-close_button")[0].onclick = function() {
        document.getElementById("easychat_share_link_Model").style.display = "none";
    }

})(window);

document_readystate_interval = setInterval(function() {
    if(document.readyState == "complete" && client_websocket_open) {
        if(EASYASSIST_COBROWSE_META.allow_screen_sharing_cobrowse == false) {
            easyassist_sync_html_data();
        }

        if(get_easyassist_cookie("easyassist_agent_connected") == "true") {
            easyassist_reset_internet_connectivity_check_timer();
        }
        clearInterval(document_readystate_interval);
    }
}, 1000);
