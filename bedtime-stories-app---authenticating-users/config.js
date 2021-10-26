import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyC2yXCDV1hvDYAXa-Kaobj40SQEYUifPNs',
  authDomain: 'bedtime-stories-bd788.firebaseapp.com',
  projectId: 'bedtime-stories-bd788',
  storageBucket: 'bedtime-stories-bd788.appspot.com',
  messagingSenderId: '66994511907',
  appId: '1:66994511907:web:cf5b18e1518d1ee4269196',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
