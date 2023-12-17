
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR1USQpj1PpJIkzhAva23vH6dvGr9C3Lw",
  authDomain: "dzeusrnd.firebaseapp.com",
  projectId: "dzeusrnd",
  storageBucket: "dzeusrnd.appspot.com",
  messagingSenderId: "764210814999",
  appId: "1:764210814999:web:33fb70376501eeefb83c52",
  measurementId: "G-HRWL41914D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;