CienradiosFirebase.user = {
    currentUser: function() {
        if (firebase.auth().currentUser) {
            firebase.auth().currentUser.reload();
            return firebase.auth().currentUser;
        } else {
            return false;
        }
    },
    createUserData: function(userData) {
        var cloudMethod = 'createUserData';
        if (firebase.auth().currentUser) {
            firebase
                .auth()
                .currentUser.getIdToken()
                .then(
                    function(token) {
                        var req = new XMLHttpRequest();
                        var params = http_build_query(userData);
                        req.onload = function() {
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
        }
    },
    setUserData: function(userData) {
        var cloudMethod = 'setUserData';
        if (firebase.auth().currentUser) {
            if (userData.firstName && userData.lastName) {
                firebase.auth().currentUser.updateProfile({
                    displayName: userData.firstName + ' ' + userData.lastName
                });
            }
            firebase
                .auth()
                .currentUser.getIdToken()
                .then(
                    function(token) {
                        var req = new XMLHttpRequest();
                        var params = http_build_query(userData);
                        req.onload = function() {
                            document.getElementById('myaccount-message').style.display = 'flex';
                            document.getElementById('myaccount-message-text').innerHTML = 'Datos actualizados correctamente.';
                            setTimeout(function() {
                                document.getElementById('myaccount-message').style.display = 'none';
                            }, 5000);
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
        }
    },
    getUserData: function() {
        return new Promise(function(resolve, reject) {
            var cloudMethod = 'getUserData';
            var logged_user = CienradiosFirebase.user.currentUser();
            if (logged_user) {
                firebase
                    .auth()
                    .currentUser.getIdToken()
                    .then(
                        function(token) {
                            var req = new XMLHttpRequest();
                            //var params = http_build_query({ authId: logged_user.uid });
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
    handleLoggedUser: function(logged_user) {
        if (window.location.pathname.indexOf('mi-cuenta') == 1) {
            CienradiosFirebase.account.handleMyAccount(logged_user);
        } else {
            CienradiosFirebase.account.handleHeader(logged_user);
        }
        if (!logged_user.email || logged_user.email == null) {
            openModal('firebase-need-email');
        }
    },
    updateEmail: function(email) {
        if (email) {
            var cloudMethod = 'updateEmail';
            var logged_user = CienradiosFirebase.user.currentUser();
            if (logged_user) {
                firebase
                    .auth()
                    .currentUser.getIdToken()
                    .then(
                        function(token) {
                            var req = new XMLHttpRequest();
                            var params = http_build_query({ email: email });
                            req.onload = function() {
                                if (typeof document.getElementById('post-contest') != 'undefined' && document.getElementById('post-contest') != null) {
                                    if (document.getElementById('post-contest').classList.contains('active')) {
                                        var contestId = document.getElementById('post-contest').getAttribute('data-id');
                                        CienradiosFirebase.contests.contestHandler(contestId);
                                    }
                                }
                                closeModal('firebase-need-email');
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
            }
        }
    }
};
