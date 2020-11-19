import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCRl8CWaDRsPx1VVufz-DHTjwlPWBaMxl4",
  authDomain: "sofa-truong-long.firebaseapp.com",
  databaseURL: "https://sofa-truong-long.firebaseio.com",
  projectId: "sofa-truong-long",
  storageBucket: "sofa-truong-long.appspot.com",
  messagingSenderId: "1029593328094",
  appId: "1:1029593328094:web:4dc91b1d9272540caf554f",
  measurementId: "G-TP4RHHWDC3",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
