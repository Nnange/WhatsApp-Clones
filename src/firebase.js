// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCeblBEV7wqchTyAfO52BtSvDn5unAInIA",
    authDomain: "whatsapp-clone-6f076.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-6f076.firebaseio.com",
    projectId: "whatsapp-clone-6f076",
    storageBucket: "whatsapp-clone-6f076.appspot.com",
    messagingSenderId: "1027475739101",
    appId: "1:1027475739101:web:4e944a79d49e6bcc06e634",
    measurementId: "G-JN470NRWM6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;