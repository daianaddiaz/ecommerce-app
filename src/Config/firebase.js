import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJqhpGNDzNEdVQ6Y9d99vtmHLPylMDR08",
    authDomain: "app-react-utn-e1958.firebaseapp.com",
    projectId: "app-react-utn-e1958",
    storageBucket: "app-react-utn-e1958.appspot.com",
    messagingSenderId: "721659973187",
    appId: "1:721659973187:web:f4dfabccf297d2aa804ef6",
    measurementId: "G-7Y0SFCKYLH"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth()
firebase.db = firebase.firestore()
export default firebase

