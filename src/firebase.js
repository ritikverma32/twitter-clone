import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyB3zSdywh-HeleIb-yKeje1FxNl7UDQgdk",
  
    authDomain: "twitter-clone-b7542.firebaseapp.com",
  
    projectId: "twitter-clone-b7542",
  
    storageBucket: "twitter-clone-b7542.appspot.com",
  
    messagingSenderId: "136812327350",
  
    appId: "1:136812327350:web:105be6259fc76bdf471117",
  
    measurementId: "G-SJ13N94LGB"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;


  