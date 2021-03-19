import firebase from 'firebase'

// Note: this file is meant to be public, and safe as long as the security rules are safe:
// https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public

const firebaseConfig = {
    apiKey: "AIzaSyD7NUVfrImccSo8FuCBG7bXVk0oLFqgE-k",
    authDomain: "yardzen-demo.firebaseapp.com",
    databaseURL: "https://yardzen-demo.firebaseio.com",
    projectId: "yardzen-demo",
    storageBucket: "yardzen-demo.appspot.com",
    messagingSenderId: "509183652730",
    appId: "1:509183652730:web:ba2208f7d8e0882f009cc3"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;