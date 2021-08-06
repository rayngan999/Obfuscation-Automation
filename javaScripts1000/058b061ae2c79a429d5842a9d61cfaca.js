function openModal(modalID, title, text) {
    registrationDlPush('registrationOpenModal', getUserPlace(), 'click', 'open-' + modalID);
    var all_modals = document.getElementsByClassName('modal');
    for (var i = 0; i < all_modals.length; i++) {
        all_modals[i].classList.remove('show');
    }
    var current_modal = document.getElementById(modalID);
    current_modal.classList.add('show');
    var body = document.body;
    body.classList.add('modal-on');
    if (title) {
        var current_modal_title = current_modal.querySelectorAll('.main-title');
        current_modal_title[0].innerHTML = title;
    }
    if (text) {
        var current_modal_text = current_modal.querySelectorAll('.modal-text');
        current_modal_text[0].innerHTML = text;
    }
}

function closeModal(modalID) {
    var current_modal = document.getElementById(modalID);
    current_modal.classList.remove('show');
    var body = document.body;
    body.classList.remove('modal-on');
    emptyModalForms();

    if (modalID == 'firebase-newsletter-modal') {
        registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'emailModalClose');
    }
}
function closeModalFromOverlay(element, e, modalID) {
    var targ;
    if (!e) var e = window.event;
    if (e.target) targ = e.target;
    else if (e.srcElement) targ = e.srcElement;
    if (typeof targ.nodeType != 'undefined' && targ.nodeType == 3) targ = targ.parentNode;

    if (element == targ) {
        closeModal(modalID);
    }
}
function switch_modal(currentModal, nextModal) {
    emptyModalForms();
    var current_modal = document.getElementById(currentModal);
    current_modal.classList.remove('show');
    var next_modal = document.getElementById(nextModal);
    next_modal.classList.add('show');
}
function modalGenderSelect(element) {
    var selectedOption = element.value || element.options[element.selectedIndex].value;
    if (selectedOption == 'other') {
        document.getElementById('gender-custom-row').style.display = 'block';
    } else {
        document.getElementById('gender-custom-row').style.display = 'none';
    }
}
function firebaseHeaderToggle() {
    var dropdown = document.getElementById('firebase-header-dropdown');
    if (dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    } else {
        dropdown.classList.add('active');
    }
}
function closeDropdown() {
    if (window.innerWidth >= 768) {
        document.getElementById('firebase-header-dropdown').classList.remove('active');
    }
}
function emptyModalForms() {
    var inputs = document.querySelectorAll('.registration-modal input[type=text],.registration-modal input[type=password], .registration-modal select');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
        inputs[i].classList.remove('error');
    }
    var error_messages = document.querySelectorAll('.registration-modal .error_message');
    for (var i = 0; i < error_messages.length; i++) {
        error_messages[i].innerHTML = '';
        error_messages[i].style.display = 'none';
    }
}
function validateForm(formID) {
    var flag = true;
    var current_form = document.getElementById(formID);
    var inputs = current_form.querySelectorAll(
        'input[type=text].validate, input[type=password].validate, select.validate, textarea.validate, input[type=hidden].validate'
    );
    for (var i = 0; i < inputs.length; i++) {
        var current_input = inputs[i];
        if (current_input.value.length > 0) {
            //EMAIL
            if (current_input.classList.contains('email')) {
                if (!validateEmail(current_input.value)) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //PASSWORD
            } else if (current_input.classList.contains('password')) {
                if (current_input.value.length < 6 || current_input.value.length > 12) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //FIRSTNAME-LASTNAME
            } else if (current_input.classList.contains('firstName') || current_input.classList.contains('lastName')) {
                if (current_input.value.length < 3 || !/^[a-z\s]+$/i.test(current_input.value)) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //DNI
            } else if (current_input.classList.contains('dni')) {
                if (isNaN(current_input.value) || current_input.value.length < 7 || current_input.value.length > 8) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //BIRTHDAY
            } else if (current_input.classList.contains('birthDay')) {
                var pattern = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;
                if (!pattern.test(current_input.value)) {
                    document.getElementById('contest-day-input').classList.add('error');
                    document.getElementById('contest-month-input').classList.add('error');
                    document.getElementById('contest-year-input').classList.add('error');
                    flag = false;
                } else {
                    document.getElementById('contest-day-input').classList.remove('error');
                    document.getElementById('contest-month-input').classList.remove('error');
                    document.getElementById('contest-year-input').classList.remove('error');
                }
                //TELEPHONE
            } else if (current_input.classList.contains('tel')) {
                if (isNaN(current_input.value) || current_input.value.length > 12) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //ADDRESS
            } else if (current_input.classList.contains('address')) {
                if (!/^[a-z0-9\s]+$/i.test(current_input.value)) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //PROVINCE
            } else if (current_input.classList.contains('province')) {
                if (!/^[a-z\s]+$/i.test(current_input.value) || current_input.value == 'Provincia') {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //CONTEST ANSWER
            } else if (current_input.classList.contains('contest-answer')) {
                if (typeof current_input.value != 'string' || current_input.value.length > 120) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //GENDER
            } else if (current_input.classList.contains('gender')) {
                if (current_input.value.length < 3 || !/^[a-z\s]+$/i.test(current_input.value)) {
                    current_input.classList.add('error');
                    flag = false;
                } else {
                    current_input.classList.remove('error');
                }
                //GENDER CUSTOM
            } else if (current_input.classList.contains('gender-custom')) {
                current_input.classList.remove('error');
            } else {
                current_input.classList.remove('error');
            }
        } else {
            console.log(current_input);
            flag = false;
            current_input.classList.add('error');
        }
    }

    return flag;
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function addErrorMessage(modalID, message) {
    var modal = document.getElementById(modalID);
    var modal_error = modal.querySelectorAll('.error_message');
    modal_error[0].innerHTML = message;
    modal_error[0].style.display = 'block';
}

function http_build_query(object) {
    const keys = Object.keys(object);
    const values = keys.map(key => object[key]);
    return keys
        .map((key, index) => {
            return `${key}=${values[index]}`;
        })
        .join('&');
}

function manageLoader(parentDivId, show) {
    if (parentDivId) {
        if (show) {
            var display = 'block';
        } else {
            var display = 'none';
        }
        var loader = document.querySelectorAll('#' + parentDivId + ' .opacity_layer');
        loader[0].style.display = display;
    }
}

function getProvinceSelect() {
    var provinces = [
        'Provincia',
        'Ciudad Autonoma de Buenos Aires',
        'Buenos Aires',
        'Catamarca',
        'Chaco',
        'Chubut',
        'Cordoba',
        'Corrientes',
        'Entre Rios',
        'Formosa',
        'Jujuy',
        'La Pampa',
        'La Rioja',
        'Mendoza',
        'Misiones',
        'Neuquen',
        'Rio Negro',
        'Salta',
        'San Juan',
        'San Luis',
        'Santa Cruz',
        'Santa Fe',
        'Santiago del Estero',
        'Tierra del Fuego',
        'Tucuman'
    ];

    var html = '<select name="province" class="user_data form-input province validate">';
    for (i = 0; i < provinces.length; i++) {
        var selected = '';
        if (i == 0) selected = 'selected="selected"';

        html += '<option value="' + provinces[i] + '" ' + selected + '>' + provinces[i] + '</option>';
    }
    html += '</select>';

    return html;
}

function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = '; expires=' + date.toGMTString();

    var domain_parts = location.hostname.split('.');
    var subdomain = domain_parts.shift();

    document.cookie = name + '=' + value + ';path=/;domain=' + location.hostname.replace(subdomain + '.', '') + expires;
}

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + '=';
    var begin = dc.indexOf('; ' + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    } else {
        begin += 2;
        var end = document.cookie.indexOf(';', begin);
        if (end == -1) {
            end = dc.length;
        }
    }

    return decodeURI(dc.substring(begin + prefix.length, end));
}

function registrationDlPush(event, category, action, label) {
    if (event && category && action && label && typeof dataLayer != 'undefined') {
        dataLayer.push({
            event: event,
            registrationCategory: category,
            registrationAction: action,
            registrationLabel: label
        });
    }
}

function getUserPlace() {
    var body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('home')) {
        return 'home';
    } else if (body.classList.contains('single-post')) {
        return 'post';
    } else if (body.classList.contains('single-concurso')) {
        return 'contest';
    } else if (body.classList.contains('category')) {
        return 'category';
    } else if (body.classList.contains('my-account')) {
        return 'mi cuenta';
    } else {
        return 'unknown';
    }
}
