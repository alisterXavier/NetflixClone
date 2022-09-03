import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIg71w5dMEnh0tnMZEqkGGiITWhp79eBo",
  authDomain: "netfl-432e5.firebaseapp.com",
  databaseURL: "https://netfl-432e5-default-rtdb.firebaseio.com",
  projectId: "netfl-432e5",
  storageBucket: "netfl-432e5.appspot.com",
  messagingSenderId: "781034575124",
  appId: "1:781034575124:web:45e810a7024462d69cde01"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();