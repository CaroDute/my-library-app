import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Fonction pour la connexion
export const signIn = async (email, password) => {
  try {
    const userInfos = await signInWithEmailAndPassword(auth, email, password);
    console.log("Utilisateur connecté :", userInfos.user);
    return userInfos.user; // Retourner l'utilisateur connecté
  } catch (error) {
    console.error("Erreur de connexion : ", error.message);
    throw error; // Relancer l'erreur pour la gérer plus tard dans l'UI
  }
};