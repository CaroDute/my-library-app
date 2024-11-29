import { createContext, useState, useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import PropTypes from "prop-types"

// Création du context pour l'utilisateur
export const UserContext = createContext();

// Création d'un Provider pour partager l'état utilisateur avec les autres composants
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null) // Etat de l'utilisateur
  const [loading, setLoading] = useState(true) // Pour afficher un loader jusqu'à la connexion ou non

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user) // Utilisateur connecté
      } else {
        setUser(null) // Utilisateur déconnecté
      }
      setLoading(false) // Une fois l'état déterminé, on arrête le loader
    })

    return () => unsubscribe()
  }, [])

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  )
}

// Validation des props pour UserProvider
UserProvider.propTypes = {
  children: PropTypes.node.isRequired, // "children" doit être un élément React (n'importe quel type de contenu)
};


