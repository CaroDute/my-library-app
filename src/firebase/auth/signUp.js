import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Fonction pour l'inscription
export const signUp = async (email, password) => {
  try {
    const userInfos = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Utilisateur inscrit :", userInfos.user);
    return userInfos.user; // Retourner l'utilisateur inscrit
  } catch (error) {
    console.error("Erreur lors de l'inscription : ", error.message);
    throw error; // Relancer l'erreur pour la gérer plus tard dans l'UI
  }
};