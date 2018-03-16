import * as firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyAuyUAlkFRi_IKFHMCjPe_wkk8roEbOhnw",
    authDomain: "guerilla-vector.firebaseapp.com",
    databaseURL: "https://guerilla-vector.firebaseio.com",
    projectId: "guerilla-vector",
    storageBucket: "guerilla-vector.appspot.com",
    messagingSenderId: "969956423921"
};

const devConfig = {
    apiKey: "AIzaSyAuyUAlkFRi_IKFHMCjPe_wkk8roEbOhnw",
    authDomain: "guerilla-vector.firebaseapp.com",
    databaseURL: "https://guerilla-vector.firebaseio.com",
    projectId: "guerilla-vector",
    storageBucket: "guerilla-vector.appspot.com",
    messagingSenderId: "969956423921"
};

const config = process.env.NODE_ENV === 'production'
? prodConfig
: devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};
