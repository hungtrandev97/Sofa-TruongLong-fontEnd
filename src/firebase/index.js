import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdJWu33WZPoRzUiej-cjlxqZfSQNM0wt4",
  authDomain: "fir-react-image-65f96.firebaseapp.com",
  databaseURL: "https://fir-react-image-65f96.firebaseio.com",
  projectId: "fir-react-image-65f96",
  storageBucket: "fir-react-image-65f96.appspot.com",
  messagingSenderId: "463222753762",
  appId: "1:463222753762:web:4c9c524056cc2e833391bb",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
