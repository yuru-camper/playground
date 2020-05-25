import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.VUE_APP_authDomain,
    databaseURL: process.env.VUE_APP_databaseURL,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.VUE_APP_appId,
    measurementId: process.env.VUE_APP_measurementId
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
    console.log(process.env.env_test)
}

export default firebase;