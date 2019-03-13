import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
        apiKey: "AIzaSyDQ-Q2o_2FrdmhVp2DGPzmADcwtgBUMUHI",
        authDomain: "burgerqueen-52feb.firebaseapp.com",
        databaseURL: "https://burgerqueen-52feb.firebaseio.com",
        projectId: "burgerqueen-52feb",
        storageBucket: "burgerqueen-52feb.appspot.com",
        messagingSenderId: "390462990815"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;