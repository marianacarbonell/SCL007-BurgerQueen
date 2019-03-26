import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(

{
        apiKey: "AIzaSyDQ-Q2o_2FrdmhVp2DGPzmADcwtgBUMUHI",
        authDomain: "burgerqueen-52feb.firebaseapp.com",
        databaseURL: "https://burgerqueen-52feb.firebaseio.com",
        projectId: "burgerqueen-52feb",
});

const db = firebase.firestore();

export default db;