import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBw-W_J9ZN2qnvQIHEdTWUUOJQFVdJg7Uc",
    authDomain: "imessage-react-10779.firebaseapp.com",
    projectId: "imessage-react-10779",
    storageBucket: "imessage-react-10779.appspot.com",
    messagingSenderId: "351576182697",
    appId: "1:351576182697:web:c77a9b36d626bf8ad27eb8",
    measurementId: "G-4KT5L27QDY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;