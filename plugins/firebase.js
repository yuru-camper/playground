import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// const config = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.measurementId
// }

const config = {
    apiKey: "AIzaSyBxQnVz9BYb3R0rgilwSN6xGIP83YGrYbY",
    // authDomain: "playground-b85cc.firebaseapp.com",
    authDomain: "yuru-camper.com",
    databaseURL: "https://playground-b85cc.firebaseio.com",
    projectId: "playground-b85cc",
    storageBucket: "playground-b85cc.appspot.com",
    messagingSenderId: "617685239053",
    appId: "1:617685239053:web:7c4020d4d737d250e79c44",
    measurementId: "G-6YE6R287F2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase;