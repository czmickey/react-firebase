import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAJYywHVAmr6UuSLMLQ08W0pJoFyzB3UYs',
  authDomain: 'mickey-test-c190b.firebaseapp.com',
  databaseURL: 'https://mickey-test-c190b.firebaseio.com',
  projectId: 'mickey-test-c190b',
  storageBucket: 'mickey-test-c190b.appspot.com',
  messagingSenderId: '1061982244878',
  appId: '1:1061982244878:web:25d9696cb2516f0c272c5f',
  measurementId: 'G-QCDL9GXC6C',
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase.initializeApp(firebaseConfig);
