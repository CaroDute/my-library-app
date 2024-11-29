import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWaTAAmhRsGNkh6R-xFPXtp0y0IymxEEI",
  authDomain: "my-library-app-89f26.firebaseapp.com",
  projectId: "my-library-app-89f26",
  storageBucket: "my-library-app-89f26.firebasestorage.app",
  messagingSenderId: "418422809936",
  appId: "1:418422809936:web:cf0210443f5efdca703855"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Pour l'authentification
export const db = getFirestore(app); // Pour la base de données