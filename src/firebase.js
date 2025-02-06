import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2w7ypQsgjqmx-Iqzd_BC3Db2_wl0_KQA",
  authDomain: "twitter-clone-ff76f.firebaseapp.com",
  projectId: "twitter-clone-ff76f",
  storageBucket: "twitter-clone-ff76f.firebasestorage.app",
  messagingSenderId: "631535874337",
  appId: "1:631535874337:web:2eef483b413edb26c68e60",
  measurementId: "G-4DZGNLYD7D"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;


  
