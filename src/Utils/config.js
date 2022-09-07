import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0C5u87I7CNf_NcV5XnnWI0ixvDqAOSzU",
  authDomain: "reto-grupo-salinas.firebaseapp.com",
  projectId: "reto-grupo-salinas",
  storageBucket: "reto-grupo-salinas.appspot.com",
  messagingSenderId: "488352590968",
  appId: "1:488352590968:web:9c8d18ceaeb5a42101518d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);