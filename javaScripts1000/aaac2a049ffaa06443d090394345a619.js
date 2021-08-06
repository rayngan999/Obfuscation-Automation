CienradiosFirebase.contests = {
    contestHandler: function(contestId) {
        var cloudMethod = 'checkContestParticipation';
        var currentUser = CienradiosFirebase.user.currentUser();
        if (currentUser && currentUser.email != null) {
            if (currentUser.emailVerified == true || currentUser.providerData[0].providerId != 'password') {
                firebase
                    .auth()
                    .currentUser.getIdToken(true)
                    .then(
                        function(token) {
                            var req = new XMLHttpRequest();
                            var params = http_build_query({ contestId: contestId });
                            req.onload = function() {
                                var response = JSON.parse(req.responseText);
                                if (response.code == 1) {
                                    if (document.getElementById('contest-ugc-wrapper')) {
                                        var isUgc = true;
                                        CienradiosFirebase.contests.showForm(response.dataToCollect, isUgc);
                                        document.getElementById('ugc-loading-placeholder').style.display = 'none';
                                        document.getElementById('contest-ugc-form').style.display = 'block';
                                    } else {
                                        CienradiosFirebase.contests.showForm(response.dataToCollect);
                                    }
                                } else if (response.code == 2) {
                                    CienradiosFirebase.contests.showAlreadyParticipate();
                                    if (document.getElementById('contest-ugc-wrapper')) {
                                        document.getElementById('contest-ugc-wrapper').style.display = 'none';
                                    }
                                } else {
                                    console.log('ERROR', response);
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
                CienradiosFirebase.contests.showUnverified(currentUser);
                if (document.getElementById('contest-ugc-wrapper')) {
                    document.getElementById('contest-ugc-wrapper').style.display = 'none';
                }
            }
        } else if (currentUser && (currentUser.email == null || !currentUser.email)) {
            openModal('firebase-need-email');
            CienradiosFirebase.contests.showNeedEmail(currentUser);
            if (document.getElementById('contest-ugc-wrapper')) {
                document.getElementById('contest-ugc-wrapper').style.display = 'none';
            }
        } else {
            CienradiosFirebase.contests.showNoLogged();
            if (document.getElementById('contest-ugc-wrapper')) {
                document.getElementById('contest-ugc-wrapper').style.display = 'none';
            }
        }
    },
    showForm: function(dataToCollect, isUgc) {
        var html = '';

        var externalLink = document.getElementById('post-contest').getAttribute('data-external-link');

        if (externalLink.length > 0) {
            html += '<div class="contest_external_link"><a href="' + externalLink + '" target="_blank">CLICK PARA PARTICIPAR</a>';
            document.getElementById('post-contest').innerHTML = html;
        } else {
            if (!isUgc) {
                html +=
                    '<div class="participate_box"><form id="contest-form"><div class="title">ParticipÃ¡</div><div class="subtitle">CompletÃ¡ los siguientes campos:</div>';
            }

            for (var i = 0; i < dataToCollect.length; i++) {
                if (dataToCollect[i] == 'lastName')
                    html += '<input class="form-input lastName user_data validate" type="text" name="lastName" placeholder="Apellido">';

                if (dataToCollect[i] == 'dni') html += '<input class="form-input dni user_data validate" type="text" name="dni" placeholder="DNI">';

                if (dataToCollect[i] == 'birthDay') {
                    html +=
                        '<div class="form-group h-auto birthday"><span class="form-label">Fecha de Nacimiento</span><input id="contest-day-input" class="form-input birth-day border m " type="text" placeholder="DÃ­a" name="birthDay"><select name="birthMonth" id="contest-month-input" class="birthMonth  m"><option value="1">Enero</option><option value="2">Febrero</option><option value="3">Marzo</option><option value="4">Abril</option><option value="5">Mayo</option><option value="6">Junio</option><option value="7">Julio</option><option value="8">Agosto</option><option value="9">Septiembre</option><option value="10">Octubre</option><option value="11">Noviembre</option><option value="12">Diciembre</option></select><input id="contest-year-input" class="form-input birthYear border" type="text" name="birthYear" placeholder="AÃ±o"></div>';

                    html += '<input type="hidden" name="birthDay" id="hidden-date-input" class="user_data validate birthDay" value="" />';
                }

                if (dataToCollect[i] == 'tel') html += '<input class="form-input tel user_data validate" type="text" name="tel" placeholder="TelÃ©fono">';

                if (dataToCollect[i] == 'province') {
                    html += getProvinceSelect();
                }
            }

            html +=
                '<textarea class="form-input contest-answer validate" placeholder="' +
                document.getElementById('post-contest').getAttribute('data-quest') +
                '" maxlength="120"></textarea>';

            if (!isUgc) {
                html += '<div class="sp10"></div><input type="submit" class="button" value="Participar" />';
            } else {
                html +=
                    '<input class="form-input ugc-title tooltip" type="text" name="title" data-validation="address" placeholder="TÃ­tulo del contenido" maxlength="70" title="Ingrese un tÃ­tulo vÃ¡lido"><div class="sp10"></div>';
            }

            html += '<div class="opacity_layer"><div class="spinner"><div class="cube1"></div><div class="cube2"></div></div></div>';

            if (!isUgc) {
                html += '</form></div></div>';
            }

            if (isUgc) {
                document.getElementById('contest-custom-ugc-fields').innerHTML = html;
                document.getElementById('post-contest').style.display = 'none';
                document.getElementById('contest-ugc-wrapper').style.display = 'block';
            } else {
                document.getElementById('post-contest').innerHTML = html;

                document.getElementById('contest-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                    if (document.getElementById('hidden-date-input')) {
                        document.getElementById('hidden-date-input').value =
                            document.getElementById('contest-day-input').value +
                            '/' +
                            document.getElementById('contest-month-input').value +
                            '/' +
                            document.getElementById('contest-year-input').value;
                    }
                    if (validateForm('contest-form')) {
                        var user_data = {};
                        var contestData = {};
                        contestData.contestId = document.getElementById('post-contest').getAttribute('data-id');
                        contestData.contestEnd = document.getElementById('post-contest').getAttribute('data-end');
                        var contestFormElements = document.getElementById('contest-form').elements;
                        for (var i = 0; i < contestFormElements.length; i++) {
                            var element = contestFormElements[i];
                            if (element.className.indexOf('user_data') > -1) {
                                user_data[element.getAttribute('name')] = element.value;
                            } else if (element.className.indexOf('contest-answer') > -1) {
                                contestData.answer = element.value;
                            }
                        }
                        CienradiosFirebase.contests.participate(user_data, contestData);
                    }
                });
            }
        }
    },
    participate: function(userData, contestData, ugcContest) {
        if (ugcContest) {
            var formId = 'contest-ugc-form';
        } else {
            var formId = 'contest-form';
        }
        manageLoader(formId, true);
        if (
            (typeof contestData.contestId != 'undefined',
            contestData.contestId.length > 0,
            typeof contestData.answer != 'undefined',
            contestData.answer.length > 0)
        ) {
            var cloudMethod = 'contestParticipation';
            if (firebase.auth().currentUser) {
                firebase
                    .auth()
                    .currentUser.getIdToken(true)
                    .then(
                        function(token) {
                            var req = new XMLHttpRequest();
                            var params = http_build_query({
                                participateData: JSON.stringify({ userData: userData, contestData: contestData })
                            });
                            req.onload = function() {
                                var response = JSON.parse(req.responseText);
                                manageLoader(formId, false);
                                if (response.code == 1) {
                                    CienradiosFirebase.contests.showAlreadyParticipate();
                                    registrationDlPush('contests', getUserPlace(), 'process', 'participateSuccess');
                                    if (ugcContest && typeof ugcContestUploadAjax == 'function') {
                                        ugcContestUploadAjax();
                                    }
                                }
                            }.bind(this);
                            req.onerror = function() {
                                manageLoader(formId, false);
                                console.log('There was an error');
                            }.bind(this);
                            req.open('POST', cloudUrl + cloudMethod, true);
                            req.setRequestHeader('Authorization', 'Bearer ' + token);
                            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                            req.send(params);
                        }.bind(this)
                    );
            } else {
                manageLoader(formId, false);
                console.log('No hay un usuario logueado para participar.');
            }
        } else {
            manageLoader(formId, false);
            console.log('Contest Answer o Contest ID vacio', contestData.answer, contestData.contestId);
        }
    },
    showAlreadyParticipate: function() {
        var html =
            '<div class="success-message"><div class="iconito"> <i class="fa fa-check-circle-o" aria-hidden="true"></i></div><div class="right-content"> <span class="aviso">Â¡Ya estÃ¡ participando!</span> <span class="mensaje">Los ganadores serÃ¡n informados cuando finalice el concurso.</span></div></div>';

        document.getElementById('post-contest').innerHTML = html;
    },
    showNoLogged: function() {
        var onclick = "'" + 'firebase-login-modal' + "'";
        var html =
            '<div class="not-logged"><div class="title">Ingresar:</div><div class="text">Es necesario que tengas una cuenta para poder participar de nuestros concursos</div><div class="button" data-modal="login" data-call-to-action="" onclick="openModal(' +
            onclick +
            ')">Ingresar</div></div>';
        document.getElementById('post-contest').innerHTML = html;
    },
    showUnverified: function(currentUser) {
        var html =
            '<div class="alert-message"><div class="iconito"> <i class="fa fa-exclamation-triangle fa-4x" aria-hidden="true"></i></div><div class="right-content"> <span class="aviso">Cuenta no verificada</span> <span class="mensaje">Â¡AÃºn no verificaste tu cuenta! Se ha enviado un email a <strong>' +
            currentUser.email +
            '</span></div></div>';
        document.getElementById('post-contest').innerHTML = html;
    },
    showNeedEmail: function(currentUser) {
        var html =
            '<div class="alert-message"><div class="iconito"> <i class="fa fa-exclamation-triangle fa-4x" aria-hidden="true"></i></div><div class="right-content"> <span class="aviso">Todavia no actualizaste tu Email</span> <span class="mensaje"></span></div></div>';

        document.getElementById('post-contest').innerHTML = html;
        openModal('firebase-need-email');
    }
};
