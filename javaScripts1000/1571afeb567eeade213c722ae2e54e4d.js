class EasyassistCustomSelect2 {
    constructor(select_element, placeholder, background_color, obfuscated_field) {
        this.placeholder = placeholder;
        background_color = background_color;

        try {
            if(!(select_element instanceof HTMLElement)) {
                var select_element = document.querySelector(selector);
            }
        } catch(err) {}

        var custom_dropdown_option_container_id = "easyassist-custom-dropdown-option-container2";
        var selected_list_class = "easyassist-option-selected2";
        var show_option_container_class = "easyassist-dropdown-show2";
        var custom_dropdown_selected_option = "";
        var dropdown_option_selected = false;
        var is_obfuscated = obfuscated_field;

        var custom_dropdown_wrapper = "";
        var custom_dropdown_option_container = "";
        var custom_dropdown_options = "";
        var custom_dropdown_selected_option_wrapper = "";
        var select_element_width = select_element.offsetWidth;
        var select_element_height = select_element.offsetHeight;
        // Create elements
        custom_dropdown_wrapper = create_element('div', 'easyassist-custom-dropdown-container2');
        custom_dropdown_selected_option_wrapper = create_element('div', 'easyassist-dropdown-selected2');
        select_element.parentElement.insertBefore(custom_dropdown_wrapper,select_element);
        custom_dropdown_wrapper.appendChild(select_element)
        custom_dropdown_wrapper.style.width = select_element_width + "px";
        custom_dropdown_wrapper.style.minHeight = select_element_height + "px";
        custom_dropdown_selected_option_wrapper.style.minHeight = select_element_height + "px";
        if(is_obfuscated[0] == true) {
            custom_dropdown_selected_option_wrapper.setAttribute("easyassist-obfuscate", is_obfuscated[1]);
        }
        for(var idx = 0; idx < select_element.children.length; idx ++) {
            let option_el = select_element.children[idx];
            let option_text = option_el.text.trim();
            let option_value = option_el.value;

            if(option_el.selected) {
                dropdown_option_selected = true;
                custom_dropdown_selected_option = option_text;
            }
        }

        if(dropdown_option_selected) {
            custom_dropdown_selected_option_wrapper.innerHTML = custom_dropdown_selected_option;
        } else if(this.placeholder) { 
            custom_dropdown_selected_option_wrapper.innerHTML = this.placeholder;
        } else {
            custom_dropdown_selected_option_wrapper.innerHTML = custom_dropdown_selected_option;
        }

        select_element.insertAdjacentElement('afterend', custom_dropdown_selected_option_wrapper);

        add_click_event_into_document(easyassist_add_remove_existing_element);
        // Add eventlistener

        custom_dropdown_selected_option_wrapper.addEventListener('click', function(e) {
            var custom_dropdown_wrapper_dim = custom_dropdown_wrapper.getBoundingClientRect();

            custom_dropdown_options = "";
            custom_dropdown_option_container = document.getElementById(custom_dropdown_option_container_id);
            var option_container_exist = false;

            if(custom_dropdown_option_container) {
                var custom_dropdown_option_container_select_id = custom_dropdown_option_container.getAttribute("data-select");
                var custom_dropdown_wrapper_id = custom_dropdown_wrapper.getAttribute("data-select");
                if(custom_dropdown_option_container_select_id == custom_dropdown_wrapper_id) {
                    option_container_exist = true;
                    custom_dropdown_option_container.style.top = window.pageYOffset + custom_dropdown_wrapper_dim.y + custom_dropdown_wrapper_dim.height+ 1 + "px";
                    custom_dropdown_option_container.style.left = window.pageXOffset + custom_dropdown_wrapper_dim.x + "px";
                    custom_dropdown_option_container.style.width = custom_dropdown_wrapper_dim.width + "px";
                    custom_dropdown_option_container.classList.toggle(show_option_container_class);
                } else {
                    custom_dropdown_option_container.remove();
                }
            }

            if(option_container_exist == false) {
                var random_select_id = Math.floor(Math.random() * 100000000000);
                custom_dropdown_option_container = create_element('ul', 'easyassist-custom-dropdown-option-container2 '+show_option_container_class);
                custom_dropdown_option_container.id = custom_dropdown_option_container_id;
                custom_dropdown_option_container.setAttribute('data-select', random_select_id);
                custom_dropdown_wrapper.setAttribute('data-select', random_select_id);
                // custom_dropdown_option_container.style.top = select_element.nextElementSibling.offsetHeight + 2 + "px";
                if(is_obfuscated[0] == true) {
                    custom_dropdown_option_container.setAttribute("easyassist-obfuscate", is_obfuscated[1]);
                }
                for(var idx = 0; idx < select_element.children.length; idx ++) {
                    let option_el = select_element.children[idx];
                    let option_text = option_el.text.trim();
                    let option_value = option_el.value;

                    if(option_el.selected) {
                        custom_dropdown_options += [
                            '<li  class="' + selected_list_class + '">',
                                option_text,
                                '<input type="hidden" value="' + option_value + '">',
                            '</li>',
                        ].join('');
                    } else {
                        custom_dropdown_options += [
                            '<li>',
                                option_text,
                                '<input type="hidden" value="' + option_value + '">',
                            '</li>',
                        ].join('');
                    }
                }

                custom_dropdown_option_container.innerHTML = custom_dropdown_options;
                // select_element.insertAdjacentElement('afterend', custom_dropdown_option_container);
                document.body.appendChild(custom_dropdown_option_container);
                custom_dropdown_option_container.style.position = "absolute";
                custom_dropdown_option_container.style.top = window.pageYOffset + custom_dropdown_wrapper_dim.y + custom_dropdown_wrapper_dim.height+ 1 + "px";
                custom_dropdown_option_container.style.left = window.pageXOffset + custom_dropdown_wrapper_dim.x + "px";
                custom_dropdown_option_container.style.width = custom_dropdown_wrapper_dim.width + "px";
                for(let idx = 0; idx < custom_dropdown_option_container.children.length; idx ++) {
                    let li_element = custom_dropdown_option_container.children[idx];
                    li_element.addEventListener('click', function(e) {
                        let selected_option_text = this.innerText;
                        reset_dropdown();
                        li_element.classList.add(selected_list_class);
                        li_element.style.setProperty('background-color', background_color, 'important');
                        custom_dropdown_selected_option_wrapper.innerHTML = selected_option_text;
                        custom_dropdown_option_container.classList.toggle(show_option_container_class);

                        // Update selecte drodown
                        let option_value = li_element.children[0].value;
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
                    });
                }
            }
        });

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

        function add_click_event_into_document(target_function){
            try {
                document.removeEventListener('click', target_function);
            } catch(err) {}
            document.addEventListener('click', target_function);
        }
    }
}

function easyassist_add_remove_existing_element(event) {
    try {
        if(event.target.parentElement.className != "easyassist-custom-dropdown-container2") {
            document.getElementById("easyassist-custom-dropdown-option-container2").remove();
        }
    } catch(err) {}
}