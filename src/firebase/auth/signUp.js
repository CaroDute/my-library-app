import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { setDoc, doc, getFirestore } from "firebase/firestore";

// Fonction pour l'inscription
export const signUp = async (email, password, username) => {
  try {
    const userInfos = await createUserWithEmailAndPassword(auth, email, password);
    const user = userInfos.user; // Retourner l'utilisateur inscrit

    const db = getFirestore()
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
    });

    console.log("Utilisateur inscrit avec nom d'utilisateur : ", userInfos.user)
    return userInfos.user
  } catch (error) {
    console.error("Erreur lors de l'inscription : ", error.message);
    throw error; // Relancer l'erreur pour la gérer plus tard dans l'UI
  }
};