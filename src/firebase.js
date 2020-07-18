import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAEaH8y6n9UeyzF_np8R4SDzb_54OHST8A',
  authDomain: 'auth-firebase-vue-bfe4d.firebaseapp.com',
  databaseURL: 'https://auth-firebase-vue-bfe4d.firebaseio.com',
  projectId: 'auth-firebase-vue-bfe4d',
  storageBucket: 'auth-firebase-vue-bfe4d.appspot.com',
  messagingSenderId: '263680444368',
  appId: '1:263680444368:web:51b4205fb3b739f15f9bd5',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
