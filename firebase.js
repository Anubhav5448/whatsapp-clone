// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDXMOrgCWgalmzqQhgMnq9oW3yoj_2L8H4",
//   authDomain: "whatsapp-2739b.firebaseapp.com",
//   projectId: "whatsapp-2739b",
//   storageBucket: "whatsapp-2739b.appspot.com",
//   messagingSenderId: "203319871116",
//   appId: "1:203319871116:web:c632f2de7021a2ee8e5da9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();



import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export default function initfirebase(){
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
}


export const db = ;
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();