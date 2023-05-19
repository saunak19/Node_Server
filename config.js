
const firebase = require('firebase')

const firebaseConfig = {

    apiKey: "AIzaSyA3H40LvNpEa4R7-aM-G02kUnXIw1c0His",

    authDomain: "my-project-5765-1684150317385.firebaseapp.com",

    projectId: "my-project-5765-1684150317385",

    storageBucket: "my-project-5765-1684150317385.appspot.com",

    messagingSenderId: "277427213687",

    appId: "1:277427213687:web:9dc12f6aec4922ff51fd72",

    measurementId: "G-8E763PYPZ5"

};

firebase.initializeAoo(firebaseConfig)
const db = firebase.firestore();
