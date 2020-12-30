import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYmvZwgb0HQqFgVr2r6HQcuaGbNhs3RZU",
  authDomain: "eindu-thu-broker.firebaseapp.com",
  projectId: "eindu-thu-broker",
  storageBucket: "eindu-thu-broker.appspot.com",
  messagingSenderId: "568908890525",
  appId: "1:568908890525:web:cc8f90caf2e82fb2652f74",
  measurementId: "G-P36M9WYHQ9"
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();