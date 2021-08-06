CienradiosFirebase.account = {
    handleMyAccount: async function() {
        var accountData = await CienradiosFirebase.account.getAllMyAccountData();
        accountData = JSON.parse(accountData);

        if (accountData.code == 1) {
            document.getElementById('my-account-row').classList.remove('hidden');

            var logged_user_data = accountData.userData;
            var logged_user_firebase_data = CienradiosFirebase.user.currentUser();

            //User Data
            var user_data_inputs = document.getElementsByClassName('user-data-input');
            for (var i = 0; i < user_data_inputs.length; i++) {
                var input = user_data_inputs[i];

                if (typeof logged_user_data.data[input.attributes['name'].value] != 'undefined') {
                    input.value = logged_user_data.data[input.attributes['name'].value];
                    if (input.tagName == 'SELECT' && input.name == 'gender' && input.value == 'other') {
                        document.getElementById('gender-custom-row').style.display = 'flex';
                    }
                }
            }
            if (typeof logged_user_firebase_data.photoURL != 'undefined') {
                document.getElementsByClassName('profile-img-form')[0].style.backgroundImage = "url('" + logged_user_firebase_data.photoURL + "')";
                document.getElementById('myaccount-header-img').style.backgroundImage = "url('" + logged_user_firebase_data.photoURL + "')";
            }

            //Check verification
            if (CienradiosFirebase.user.currentUser().emailVerified) {
                document.getElementById('not-verified').style.display = 'none';
            }

            //Nesletters
            var mailchimpFirstName = '';
            var mailchimpLastName = '';
            if (logged_user_data.data.firstName && logged_user_data.data.lastName) {
                mailchimpFirstName = logged_user_data.data.firstName;
                mailchimpLastName = logged_user_data.data.lastName;
            }

            var listsHtml = CienradiosFirebase.newsletters.getListsHtml(
                accountData.newsleterLists,
                logged_user_data.newsletters,
                mailchimpFirstName,
                mailchimpLastName,
                'my-account'
            );
            document.getElementById('newsletter_list').innerHTML = '';
            var new_element = document.createElement('div');
            new_element.innerHTML = listsHtml;
            var newsletters_lists = document.getElementById('newsletter_list');
            newsletters_lists.appendChild(new_element);
        } else {
        }
    },
    getAllMyAccountData: function(token) {
        return new Promise(function(resolve, reject) {
            var cloudMethod = 'getAllMyAccountData';
            var logged_user = CienradiosFirebase.user.currentUser();
            if (logged_user) {
                firebase
                    .auth()
                    .currentUser.getIdToken()
                    .then(
                        function(token) {
                            var req = new XMLHttpRequest();
                            req.onload = function() {
                                resolve(req.responseText);
                            }.bind(this);
                            req.onerror = function() {
                                reject();
                                console.log('There was an error');
                            }.bind(this);
                            req.open('POST', cloudUrl + cloudMethod, true);
                            req.setRequestHeader('Authorization', 'Bearer ' + token);
                            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            req.send();
                        }.bind(this)
                    );
            }
        });
    },
    sendVerificationEmail: function() {
        var user = CienradiosFirebase.user.currentUser();
        if (user) {
            user.sendEmailVerification()
                .then(function() {
                    document.getElementById('resend-button').innerHTML = 'Se ha reenviado el email.';
                    document.getElementById('resend-button').classList.add('sended');
                    return true;
                })
                .catch(function(error) {
                    return false;
                });
        }
    },
    resetPassword: function(email) {
        if (email) {
            firebase
                .auth()
                .sendPasswordResetEmail(email)
                .then(function() {
                    setCookie('reset_url', window.location.href, 365);
                    document.getElementById('reset-response-text').innerHTML = 'Se ha enviado un email con instrucciones para reiniciar su contraseÃ±a.';
                })
                .catch(function(error) {
                    if (error.code == 'auth/user-not-found') {
                        document.getElementById('reset-response-text').innerHTML = 'No encontramos una cuenta con el email ingresado.';
                    }
                });
        }
    },
    changeAccountStatus: function(status) {
        var cloudMethod = 'changeAccountStatus';
        if (firebase.auth().currentUser) {
            var params = { status: status };
            firebase
                .auth()
                .currentUser.getIdToken()
                .then(
                    function(token) {
                        var req = new XMLHttpRequest();
                        req.onload = function() {
                            var response = JSON.parse(req.responseText);
                            if (response.code == 1) {
                                if (status == false) {
                                    CienradiosFirebase.login.signOut();
                                    if (document.location.href.indexOf('#') != -1) {
                                        history.go(-2);
                                    } else {
                                        history.go(-1);
                                    }
                                } else {
                                    closeModal('default-modal');
                                }
                            }
                        }.bind(this);
                        req.onerror = function() {
                            console.log('There was an error');
                        }.bind(this);
                        req.open('POST', cloudUrl + cloudMethod, true);
                        req.setRequestHeader('Authorization', 'Bearer ' + token);
                        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        req.send(http_build_query(params));
                    }.bind(this)
                );
        }
    },
    enableAccount: function(token) {
        var cloudMethod = 'changeAccountStatus';
        var params = { status: true };
        var req = new XMLHttpRequest();
        req.onload = function() {
            var response = JSON.parse(req.responseText);
            if (response.code == 1) {
                closeModal('default-modal');
                var title = 'Su cuenta a sido reactivada.';
                var text = 'Vuelva a ingresar para continuar.';
                openModal('default-modal', title, text);
            }
        }.bind(this);
        req.onerror = function() {
            console.log('error');
        }.bind(this);
        req.open('POST', cloudUrl + cloudMethod, true);
        req.setRequestHeader('Authorization', 'Bearer ' + token);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(http_build_query(params));
    },
    checkStatus: function() {
        return new Promise(function(resolve, reject) {
            var cloudMethod = 'checkAccountStatus';
            if (firebase.auth().currentUser) {
                firebase
                    .auth()
                    .currentUser.getIdToken()
                    .then(
                        function(token) {
                            var req = new XMLHttpRequest();
                            req.onload = function() {
                                resolve(JSON.parse(req.responseText));
                            }.bind(this);
                            req.onerror = function() {
                                reject('There was an error');
                            }.bind(this);
                            req.open('POST', cloudUrl + cloudMethod, true);
                            req.setRequestHeader('Authorization', 'Bearer ' + token);
                            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            req.send();
                        }.bind(this)
                    );
            }
        });
    },
    verificationModal: function(email) {
        CienradiosFirebase.account.sendVerificationEmail();
        var title = 'Email no Verificado';
        var text = 'Se ha enviado un email a <strong>' + email + '</strong> con instrucciones para verificar su cuenta';
        openModal('default-modal', title, text);
    },
    enableAccountModal: function(token) {
        var title = 'Esta cuenta fue cerrada';
        var text = 'Para hablitarla haga click <strong id="button-enable-account" class="cursor-pointer">AQUI</strong>';
        openModal('default-modal', title, text);
        document.querySelector('#button-enable-account').addEventListener('click', function(e) {
            CienradiosFirebase.account.enableAccount(token);
        });
    },
    handleHeader: function(logged_user) {
        if (document.getElementsByClassName('firebase-header-loggedIn').length > 0) {
            if (logged_user) {
                if (logged_user.photoURL) {
                    document.getElementById('firebase-header-img').style.backgroundImage = "url('" + logged_user.photoURL + "')";
                }
                document.getElementById('firebase-header-name').innerHTML = logged_user.displayName;
                document.getElementsByClassName('firebase-header-loggedOut')[0].style.display = 'none';
                document.getElementsByClassName('firebase-header-loggedIn')[0].style.display = 'block';
            } else {
                document.getElementsByClassName('firebase-header-loggedOut')[0].style.display = 'block';
                document.getElementsByClassName('firebase-header-loggedIn')[0].style.display = 'none';
            }
        }
    },
    handleWrongPass: function(email) {
        var cloudMethod = 'checkMigrated';
        var params = { email: email };
        var req = new XMLHttpRequest();
        req.onload = function() {
            var response = JSON.parse(req.responseText);
            if (response.migratedUser == true) {
                CienradiosFirebase.account.resetPassword(email);
                closeModal('firebase-login-modal');
                var title = 'ContraseÃ±a Expirada!';
                var text =
                    'Por razones de seguridad su contraseÃ±a ha expirado. Se ha enviado un email a <strong>' +
                    email +
                    '</strong> con instrucciones para cambiar su contraseÃ±a';
                openModal('default-modal', title, text);
            } else {
                manageLoader('firebase-register-modal', false);
                manageLoader('firebase-login-modal', false);
                addErrorMessage('firebase-login-modal', 'Los datos son incorrectos.');
            }
        }.bind(this);
        req.onerror = function() {
            console.log('There was an error');
        }.bind(this);
        req.open('POST', openCloudUrl + cloudMethod, true);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(http_build_query(params));
    }
};
