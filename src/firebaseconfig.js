import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCRgWBV33wVqHtSQJH6Ot2iHMIz_QtTLEA",
  authDomain: "matriz-conocimiento.firebaseapp.com",
  projectId: "matriz-conocimiento",
  storageBucket: "matriz-conocimiento.appspot.com",
  messagingSenderId: "762416556904",
  appId: "1:762416556904:web:1fee4d068f0d90acea84dd"
};

/* module.exports = firebaseConfig; */

const fireb = firebase.initializeApp(firebaseConfig);
const stores = fireb.firestore();

export default stores; 