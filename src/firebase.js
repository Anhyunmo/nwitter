// import { initializeApp } from "firebase/app";
import * as firebase from "firebase/app";



const firebaseConfig = {
    apiKey: process.REACT_APP_API_KEY,
    authDomain: process.REACT_APP_AUTH_DOMAIN,
    projectId: process.REACT_APP_PROJECT_ID,
    storageBucket: process.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.REACT_APP_MESSAGIN_ID,
    appId: process.REACT_APP_APP_ID
  };

export default firebase.initializeApp(firebaseConfig);