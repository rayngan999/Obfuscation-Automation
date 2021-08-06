CienradiosFirebase.newsletters = {
    getListsHtml: function(lists, userLists, firstName, lastName, place) {
        var html = '';
        for (var key in lists) {
            html += '<div class="newsletter_row row">';
            html += '<div class="newsletter-image col-xs-3">';
            html += '<img src="' + lists[key].image_url + '" alt="">';
            html += '</div>';
            html += '<div class="text-box col-xs-12 col-sm-5">';
            html += '<span>' + lists[key].title + '</span>';
            html += '<span class="newsletter-text">' + lists[key].description + '</span>';
            html += '</div>';
            html += '<div id="newsletter-box" class="newsletter-main-wrapper">';

            if (lists[key].list_id in userLists) {
                //var params = "'" + lists[key].list_id + "'";
                var params = "'" + lists[key].list_id + "','" + firstName + "','" + lastName + "','" + place + "'";
                html +=
                    '<div class="button-newsletter-submit subscribed" data-list-id="' +
                    lists[key].list_id +
                    '" onclick="javascript:CienradiosFirebase.newsletters.newsletterUnsubscribe(' +
                    params +
                    ');"></div>';
            } else {
                var params = "'" + lists[key].list_id + "','" + firstName + "','" + lastName + "','" + place + "'";
                html +=
                    '<div class="button-newsletter-submit" data-list-id="' +
                    lists[key].list_id +
                    '" onclick="javascript:CienradiosFirebase.newsletters.newsletterSubscribe(' +
                    params +
                    ');"></div>';
            }
            html += '</div>';
            html += '</div>';
        }
        return html;
    },
    newsletterSubscribe: function(listId, firstName, lastName, place, email) {
        var cloudMethod = 'newsletterSubscribe';
        var logged_user = CienradiosFirebase.user.currentUser();
        if (logged_user) {
            firebase
                .auth()
                .currentUser.getIdToken()
                .then(
                    function(token) {
                        var req = new XMLHttpRequest();
                        var params = http_build_query({
                            email: logged_user.email,
                            list_id: listId,
                            firstName: firstName,
                            lastName: lastName
                        });
                        req.onload = function() {
                            var response = JSON.parse(req.responseText);
                            if (response.code == 1) {
                                switch (place) {
                                    case 'my-account':
                                        var params = "'" + listId + "','" + firstName + "','" + lastName + "','" + place + "'";
                                        var button = document.querySelectorAll('[data-list-id="' + listId + '"]');
                                        button[0].classList.add('subscribed');
                                        button[0].setAttribute('onclick', 'javascript:CienradiosFirebase.newsletters.newsletterUnsubscribe(' + params + ');');
                                        break;
                                    case 'box':
                                        document.querySelector('#button-submit[data-list-id="' + listId + '"]').innerHTML = 'Desuscribirme';
                                        document.querySelector('#button-submit[data-list-id="' + listId + '"]').setAttribute('data-action', 'unsubscribe');
                                        break;
                                }
                                registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'success');
                            } else {
                                registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'error-' + response.message);
                            }
                        }.bind(this);
                        req.onerror = function() {
                            console.log('Error al suscribir al newsletter');
                        }.bind(this);
                        req.open('POST', cloudUrl + cloudMethod, true);
                        req.setRequestHeader('Authorization', 'Bearer ' + token);
                        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        req.send(params);
                    }.bind(this)
                );
        } else {
            if (listId && email) {
                var req = new XMLHttpRequest();
                var params = http_build_query({ list_id: listId, email: email });
                req.onload = function() {
                    var response = JSON.parse(req.responseText);
                    manageLoader('firebase-newsletter-modal', false);
                    if (response.code == 1) {
                        if (document.getElementsByClassName('fire-modal-newsletterbutton').length > 0) {
                            document.querySelector('#button-submit[data-list-id="' + listId + '"]').innerHTML = 'Ya estas suscripto!';
                        }
                        if (response.emailHasAccount == false) {
                            closeModal('firebase-newsletter-modal');
                            document.querySelector('#firebase-register-modal .main-title').innerHTML =
                                'Â¡Listo! Pronto recibirÃ¡s el primer correo.<br><br>Para gestionar tu suscripciÃ³n, creÃ¡ tu cuenta de Cienradios.';
                            openModal('firebase-register-modal');
                            document.querySelector('#firebase-register-modal .email').value = email;
                        } else {
                            document.querySelector('#firebase-newsletter-modal .newsletter-form').style.display = 'none';
                            document.querySelector('#firebase-newsletter-modal .main-title').innerHTML = 'Â¡SuscripciÃ³n Exitosa!';
                        }
                        registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'success');
                    } else {
                        addErrorMessage('firebase-newsletter-modal', 'El email ingresado no parece ser vÃ¡lido');
                        registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'error-' + response.message);
                    }
                }.bind(this);
                req.onerror = function() {
                    console.log('Error al suscribir al newsletter');
                }.bind(this);
                req.open('POST', cloudUrl + cloudMethod, true);
                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                req.send(params);
            }
        }
    },
    newsletterUnsubscribe: function(listId, firstName, lastName, place) {
        var cloudMethod = 'newsletterUnsubscribe';
        var logged_user = CienradiosFirebase.user.currentUser();
        if (logged_user) {
            firebase
                .auth()
                .currentUser.getIdToken()
                .then(
                    function(token) {
                        var req = new XMLHttpRequest();
                        var params = http_build_query({ email: logged_user.email, list_id: listId });
                        req.onload = function() {
                            var response = JSON.parse(req.responseText);
                            if (response.code == 1) {
                                switch (place) {
                                    case 'my-account':
                                        var params = "'" + listId + "','" + firstName + "','" + lastName + "','" + place + "'";
                                        var button = document.querySelectorAll('[data-list-id="' + listId + '"]');
                                        button[0].classList.remove('subscribed');
                                        button[0].setAttribute('onclick', 'javascript:CienradiosFirebase.newsletters.newsletterSubscribe(' + params + ');');
                                        break;
                                    case 'box':
                                        document.querySelector('#button-submit[data-list-id="' + listId + '"]').innerHTML = 'Suscribirme';
                                        document.querySelector('#button-submit[data-list-id="' + listId + '"]').setAttribute('data-action', 'subscribe');
                                        break;
                                }
                                registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'unsubscribe');
                            }
                        }.bind(this);
                        req.onerror = function() {
                            console.log('Error al suscribir al newsletter');
                        }.bind(this);
                        req.open('POST', cloudUrl + cloudMethod, true);
                        req.setRequestHeader('Authorization', 'Bearer ' + token);
                        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        req.send(params);
                    }.bind(this)
                );
        }
    },
    handleExternalSubscription: async function(listId, action) {
        if (typeof listId != 'undefined' && typeof action != 'undefined') {
            if (CienradiosFirebase.user.currentUser()) {
                var accountData = await CienradiosFirebase.account.getAllMyAccountData();
                accountData = JSON.parse(accountData);
                var firstName = accountData.userData.data.firstName;
                var lastName = accountData.userData.data.lastName;
                if (action == 'subscribe') {
                    CienradiosFirebase.newsletters.newsletterSubscribe(listId, firstName, lastName, 'box');
                } else {
                    CienradiosFirebase.newsletters.newsletterUnsubscribe(listId, firstName, lastName, 'box');
                }
            } else {
                document.getElementById('newsletter-listId-field').value = listId;
                document.getElementById('newsletter-action-field').value = action;
                registrationDlPush('newsletters', 'newsletters', window.location.host + ' - ' + getUserPlace(), 'boxClick');
                openModal('firebase-newsletter-modal');
            }
        }
    },
    handleNoLoggedSubscription(email, listId, action) {
        CienradiosFirebase.newsletters.newsletterSubscribe(listId, '', '', '', email);
    }
};
