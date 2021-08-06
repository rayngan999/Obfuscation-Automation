CienradiosFirebase.register = {
    register: function(userData) {
        manageLoader('firebase-register-modal', true);
        firebase
            .auth()
            .createUserWithEmailAndPassword(userData.email, userData.password)
            .then(
                function(user) {
                    var userInfo = firebase.auth().currentUser;
                    if (user.additionalUserInfo.isNewUser == true) {
                        setCookie('register_url', window.location.href, 365);
                        var createData = {
                            email: userInfo.email,
                            registration_site: window.location.host,
                            gender: userData.gender,
                            firstName: userData.firstName,
                            lastName: userData.lastName,
                            picture: window.location.origin + '/wp-content/plugins/cienradios-firebase/public/img/default-profile.svg'
                        };
                        if (userData.genderCustom.length > 0) {
                            createData.genderCustom = userData.genderCustom;
                        }
                        CienradiosFirebase.user.createUserData(createData);
                        userInfo
                            .updateProfile({
                                displayName: userData.firstName + ' ' + userData.lastName,
                                photoURL: window.location.origin + '/wp-content/plugins/cienradios-firebase/public/img/default-profile.svg'
                            })
                            .then(function() {
                                CienradiosFirebase.account.handleHeader(firebase.auth().currentUser);
                            });
                        manageLoader('firebase-register-modal', false);
                        closeModal('firebase-register-modal');
                        emptyModalForms();
                        if (userInfo.emailVerified == false) {
                            CienradiosFirebase.account.verificationModal(userInfo.email);
                        }
                        registrationDlPush('registrationRegister', getUserPlace(), 'proccess', 'registrate');
                    }
                },
                function(error) {
                    if (error.code == 'auth/email-already-in-use') {
                        addErrorMessage('firebase-register-modal', 'El email "' + userData.email + '" ya se encuentra registrado.');
                    }
                }
            );
    }
};
