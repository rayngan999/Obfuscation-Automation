document.addEventListener('DOMContentLoaded', function(event) {
    //REGISTER MODAL FORM
    if (typeof document.getElementById('firebase_register_form') != 'undefined' && document.getElementById('firebase_register_form') != null) {
        document.querySelector('#firebase_register_form').addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm('firebase_register_form')) {
                var user_data = {};
                var register_form_elements = document.getElementById('firebase_register_form').elements;
                for (var i = 0; i < register_form_elements.length; i++) {
                    var element = register_form_elements[i];
                    if (element.className.indexOf('user_data') > -1) {
                        user_data[element.getAttribute('name')] = element.value;
                    }
                }
                manageLoader('firebase-register-modal', true);
                CienradiosFirebase.register.register(user_data);
            }
        });
    }
    //LOGIN MODAL FORM
    if (typeof document.getElementById('firebase_login_form') != 'undefined' && document.getElementById('firebase_login_form') != null) {
        document.querySelector('#firebase_login_form').addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm('firebase_login_form')) {
                manageLoader('firebase-login-modal', true);
                var email = document.getElementById('login-email-field');
                var password = document.getElementById('login-password-field');
                CienradiosFirebase.login.login(email.value, password.value);
            }
        });
    }
    //RESET PASSWORD MODAL FORM
    if (typeof document.getElementById('firebase-forgot-modal') != 'undefined' && document.getElementById('firebase-forgot-modal') != null) {
        document.querySelector('#firebase-forgot-modal').addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm('firebase-forgot-modal')) {
                var email = document.getElementById('reset-email-field').value;
                CienradiosFirebase.account.resetPassword(email);
            } else {
                console.log('INVALID EMAIL');
            }
        });
    }
    //NEED EMAIL MODAL FORM
    if (typeof document.getElementById('firebase-need-email') != 'undefined' && document.getElementById('firebase-need-email') != null) {
        document.querySelector('#firebase-need-email').addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm('firebase-need-email')) {
                var email = document.getElementById('need-email-field').value;
                CienradiosFirebase.user.updateEmail(email);
            } else {
                console.log('INVALID EMAIL');
            }
        });
    }
    //NEWSLETTER MODAL FORM
    if (typeof document.getElementById('firebase-newsletter-modal') != 'undefined' && document.getElementById('firebase-newsletter-modal') != null) {
        document.querySelector('#firebase-newsletter-modal').addEventListener('submit', function(e) {
            e.preventDefault();
            registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'emailModalClick');
            document.querySelector('#firebase-newsletter-modal .error_message').innerHTML = '';
            manageLoader('firebase-newsletter-modal', true);
            if (validateForm('firebase-newsletter-modal')) {
                var email = document.getElementById('newsletter-email-field').value;
                var listId = document.getElementById('newsletter-listId-field').value;
                var action = document.getElementById('newsletter-action-field').value;
                CienradiosFirebase.newsletters.handleNoLoggedSubscription(email, listId, action);
            } else {
                console.log('INVALID EMAIL');
                manageLoader('firebase-newsletter-modal', false);
                registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'invalidEmail');
            }
        });
    }
    //MY ACCOUNT
    if (typeof document.getElementById('my-account-data-form') != 'undefined' && document.getElementById('my-account-data-form') != null) {
        document.querySelector('#my-account-data-form').addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm('my-account-data-form')) {
                var user_data = {};
                var my_account_form = document.getElementById('my-account-data-form').elements;
                for (var i = 0; i < my_account_form.length; i++) {
                    var element = my_account_form[i];
                    if (element.className.indexOf('user-data-input') > -1 && element.className.indexOf('validate') > -1) {
                        user_data[element.getAttribute('name')] = element.value;
                    }
                }
                CienradiosFirebase.user.setUserData(user_data);
            }
        });
    }
    // NEWSLETTER SUSCRIPTION MENU ITEM
    if (
        typeof document.getElementsByClassName('[class^=firebaseNewsletterMenuSuscription-]') != 'undefined' &&
        document.getElementsByClassName('[class^=firebaseNewsletterMenuSuscription-]') != null
    ) {
        var newsletterMenuElements = document.querySelectorAll('[class^=firebaseNewsletterMenuSuscription-]');
        for (i = 0; i < newsletterMenuElements.length; i++) {
            newsletterMenuElements[i].addEventListener('click', function(e) {
                e.preventDefault();
                for (i2 = 0; i2 < this.classList.length; i2++) {
                    if (this.classList[i2].includes('firebaseNewsletterMenuSuscription-')) {
                        var menuListId = this.classList[i2].split('-');
                        CienradiosFirebase.newsletters.handleExternalSubscription(menuListId[1], 'subscribe');
                    }
                }
            });
        }
    }
    //MODAL FROM URL PARAM
    function fireModalFromUrlParam(buttonUrlParamModal, getUrl, callback) {
        let urlParams = window.location.search;

        let buttonElement = document.getElementsByClassName(buttonUrlParamModal)[0];
        if ('undefined' != typeof buttonElement) {
            if (urlParams.indexOf(getUrl) >= 0) {
                if (getUrl == 'entretodos') {
                    return ugcUploadButton();
                } else {
                    buttonElement.click();
                }
            }
        }
    }
    fireModalFromUrlParam('fire-modal-newsletter', 'newsletter');
    fireModalFromUrlParam('fire-modal-ugc', 'entretodos');
});

//LOGIN-LOGOUT LISTENER
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if (typeof _cbq != 'undefined') {
            _cbq.push(['_acct', 'lgdin']);
        }
        CienradiosFirebase.user.handleLoggedUser(user);
        if (!getCookie('registered_user_id')) {
            setCookie('registered_user_id', user.uid, 365);
        }
        if (typeof loadNewsletterBoxes != 'undefined') {
            loadNewsletterBoxes();
        }
    } else {
        if (typeof _cbq != 'undefined') {
            _cbq.push(['_acct', 'anon']);
        }

        console.log('No user is signed in');
        if (typeof document.getElementById('my-account-row') != 'undefined' && document.getElementById('my-account-row') != null) {
            window.location.href = window.location.origin;
        }
    }

    if (typeof document.getElementById('post-contest') != 'undefined' && document.getElementById('post-contest') != null) {
        if (document.getElementById('post-contest').classList.contains('active')) {
            var contestId = document.getElementById('post-contest').getAttribute('data-id');
            CienradiosFirebase.contests.contestHandler(contestId);
        }
    }
});
