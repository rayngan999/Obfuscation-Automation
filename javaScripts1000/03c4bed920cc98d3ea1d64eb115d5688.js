CienradiosFirebase.login = {
    socialLogin: function(provider_type, modalID) {
        manageLoader(modalID, true);
        switch (provider_type) {
            case 'facebook':
                var provider = new firebase.auth.FacebookAuthProvider();
                provider.addScope('user_birthday');
                provider.addScope('user_age_range');
                provider.addScope('user_gender');
                provider.addScope('email');
                break;
            case 'google':
                var provider = new firebase.auth.GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/user.birthday.read');
                provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
                break;
        }

        firebase
            .auth()
            .signInWithPopup(provider)
            .then(async function(result) {
                var userInfo = result.user;
                registrationDlPush('registrationLogin', getUserPlace(), 'process', provider_type + 'Login');
                if (result.additionalUserInfo.isNewUser == true) {
                    var providerId = result.additionalUserInfo.profile.id;
                    var providerToken = result.credential.accessToken;
                    firebase
                        .auth()
                        .currentUser.getIdToken()
                        .then(
                            function(token) {
                                var cloudMethod = 'saveSocialData';
                                var req = new XMLHttpRequest();
                                var params =
                                    'providerId=' +
                                    providerId +
                                    '&providerToken=' +
                                    providerToken +
                                    '&site=' +
                                    window.location.host +
                                    '&provider=' +
                                    provider_type;
                                req.onload = function() {
                                    manageLoader('firebase-register-modal', false);
                                    manageLoader('firebase-login-modal', false);
                                    closeModal('firebase-register-modal');
                                    closeModal('firebase-login-modal');
                                    if (typeof userInfo.email == 'undefined' || userInfo.email == null) {
                                        openModal('firebase-need-email');
                                    }
                                    if (typeof document.getElementById('post-contest') != 'undefined' && document.getElementById('post-contest') != null) {
                                        if (document.getElementById('post-contest').classList.contains('active')) {
                                            var contestId = document.getElementById('post-contest').getAttribute('data-id');
                                            CienradiosFirebase.contests.contestHandler(contestId);
                                        }
                                    }
                                }.bind(this);
                                req.onerror = function() {
                                    console.log('There was an error');
                                }.bind(this);
                                req.open('POST', cloudUrl + cloudMethod, true);
                                req.setRequestHeader('Authorization', 'Bearer ' + token);
                                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                                req.send(params);
                            }.bind(this)
                        );
                } else {
                    var accountStatus = await CienradiosFirebase.account.checkStatus();
                    if (accountStatus.accountEnabled == false || accountStatus.accountEnabled == 'false') {
                        firebase
                            .auth()
                            .currentUser.getIdToken()
                            .then(
                                function(token) {
                                    CienradiosFirebase.login.signOut();
                                    manageLoader('firebase-register-modal', false);
                                    manageLoader('firebase-login-modal', false);
                                    closeModal('firebase-register-modal');
                                    closeModal('firebase-login-modal');
                                    CienradiosFirebase.account.enableAccountModal(token);
                                }.bind(this)
                            );
                    } else {
                        manageLoader('firebase-register-modal', false);
                        manageLoader('firebase-login-modal', false);
                        closeModal('firebase-register-modal');
                        closeModal('firebase-login-modal');
                        if (typeof userInfo.email == 'undefined' || userInfo.email == null) {
                            openModal('firebase-need-email');
                        }
                        if (typeof document.getElementById('post-contest') != 'undefined' && document.getElementById('post-contest') != null) {
                            if (document.getElementById('post-contest').classList.contains('active')) {
                                var contestId = document.getElementById('post-contest').getAttribute('data-id');
                                CienradiosFirebase.contests.contestHandler(contestId);
                            }
                        }
                    }
                }
            })
            .catch(function(error) {
                console.log(error);
                if (error.code == 'auth/account-exists-with-different-credential') {
                    manageLoader('firebase-register-modal', false);
                    manageLoader('firebase-login-modal', false);
                    addErrorMessage(modalID, 'Ya existe una cuenta con el email "' + error.email + '"');
                } else if (error.code == 'auth/user-disabled') {
                    console.log(error);
                    manageLoader('firebase-register-modal', false);
                    manageLoader('firebase-login-modal', false);
                    closeModal('firebase-register-modal');
                    closeModal('firebase-login-modal');
                    CienradiosFirebase.account.enableAccountModal();
                }
            });
    },
    login: function(email, password) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async function(result) {
                registrationDlPush('registrationLogin', getUserPlace(), 'process', 'credentialLogin');
                var userInfo = result.user;
                var accountStatus = await CienradiosFirebase.account.checkStatus();
                if (accountStatus.accountEnabled == 'false') {
                    firebase
                        .auth()
                        .currentUser.getIdToken()
                        .then(
                            function(token) {
                                CienradiosFirebase.login.signOut();
                                manageLoader('firebase-register-modal', false);
                                manageLoader('firebase-login-modal', false);
                                closeModal('firebase-register-modal');
                                closeModal('firebase-login-modal');
                                CienradiosFirebase.account.enableAccountModal(token);
                            }.bind(this)
                        );
                } else {
                    manageLoader('firebase-register-modal', false);
                    manageLoader('firebase-login-modal', false);
                    closeModal('firebase-login-modal');
                }
            })
            .catch(function(error) {
                if (error.code == 'auth/user-not-found') {
                    addErrorMessage('firebase-login-modal', 'No existe una cuenta con los datos ingresados.');
                    manageLoader('firebase-register-modal', false);
                    manageLoader('firebase-login-modal', false);
                } else if (error.code == 'auth/user-disabled') {
                    manageLoader('firebase-register-modal', false);
                    manageLoader('firebase-login-modal', false);
                    closeModal('firebase-register-modal');
                    closeModal('firebase-login-modal');
                    CienradiosFirebase.account.enableAccountModal();
                } else if (error.code == 'auth/wrong-password') {
                    CienradiosFirebase.account.handleWrongPass(email);
                }
            });
    },
    signOut: function() {
        firebase
            .auth()
            .signOut()
            .then(function() {
                registrationDlPush('registrationLogin', getUserPlace(), 'process', 'logout');
                CienradiosFirebase.account.handleHeader();
            })
            .catch(function(error) {});
    }
};
