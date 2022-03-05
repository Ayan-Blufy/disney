import firebase from "firebase";


    const firebaseConfig = {
        apiKey: "AIzaSyBLstDOCWHtlg3vDrmNTTSmv78OVO8gi7g",
        authDomain: "disney-clone-e7888.firebaseapp.com",
        projectId: "disney-clone-e7888",
        storageBucket: "disney-clone-e7888.appspot.com",
        messagingSenderId: "105072884805",
        appId: "1:105072884805:web:d8eef4afecdec5dbf6f72c"
    };

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };