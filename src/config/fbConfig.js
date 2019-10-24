import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyBDl9EUicjHDCFAFuAipymOPAAar9f_0xE",
    authDomain: "net-mg.firebaseapp.com",
    databaseURL: "https://net-mg.firebaseio.com",
    projectId: "net-mg",
    storageBucket: "net-mg.appspot.com",
    messagingSenderId: "590618312587",
    appId: "1:590618312587:web:aa696d44449009a499b98e",
    measurementId: "G-P6DH0GL51Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
    firebase.firestore().settings({timestampsInSnapshots:true});
  export default firebase;