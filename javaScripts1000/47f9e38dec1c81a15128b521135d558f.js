// Initialize Firebase
var config = {
    apiKey: 'AIzaSyB8eDV8aTMFBtp21_JK1pQxME-NrSIXv4M',
    authDomain: 'cienradios-registracion-828f4.firebaseapp.com',
    projectId: 'cienradios-registracion-828f4',
    storageBucket: 'cienradios-registracion-828f4.appspot.com',
    messagingSenderId: '442631180536'
};

firebase.initializeApp(config);

firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .catch(function(error) {
        console.log('Set Persistence Error: ', error);
    });

// End Initialize Firebase
var CienradiosFirebase = CienradiosFirebase || {};

//var cloudUrl = 'http://localhost:5000/cienradios-registracion-828f4/us-central1/publicApi/';
var cloudUrl = 'https://us-central1-cienradios-registracion-828f4.cloudfunctions.net/publicApi/';
var openCloudUrl = 'https://us-central1-cienradios-registracion-828f4.cloudfunctions.net/';
