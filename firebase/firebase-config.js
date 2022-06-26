// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDutyDEE13A4ktYEOK_EzVNMWon80_yhEA',
  authDomain: 'hanapwork-b2f29.firebaseapp.com',
  projectId: 'hanapwork-b2f29',
  storageBucket: 'hanapwork-b2f29.appspot.com',
  messagingSenderId: '834158719285',
  appId: '1:834158719285:web:3d64037379d343485b5c7c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const db = getFirestore();

export {authentication, db};
