import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBb09f03BPpbkjd-tfR20p5QCBZ9dLof0g",
    authDomain: "linkedin-clone-a4290.firebaseapp.com",
    projectId: "linkedin-clone-a4290",
    storageBucket: "linkedin-clone-a4290.appspot.com",
    messagingSenderId: "951543325036",
    appId: "1:951543325036:web:70dc152ca92b31d85a9349"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export {db,auth};
