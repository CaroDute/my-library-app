/* eslint-disable react/no-unescaped-entities */
import Livres from "../components/Livres";
import Recherche from "../components/Recherche";
import Header from "../components/Header";
import Filtres from "../components/Filtres";
import Footer from "../components/Footer";

import { UserContext } from "../contexts/UserContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useEffect, useState, useContext } from "react";

const Bibliotheque = () => {
  const { user } = useContext(UserContext); // Récupération de l'utilisateur connecté
  const [userData, setUserData] = useState(null); // État pour stocker les données de l'utilisateur

  useEffect(() => {
    if (user) {
      // Je récupère dans userRef la référence au document de l'utilisateur
      const userRef = doc(db, "users", user.uid);

      //Récupération des données de l'utilisateur depuis Firestore
      getDoc(userRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            // SI le document existe, mettre à jour l'état avec les données utilisateur
            setUserData(docSnap.data());
          } else {
            console.log("Aucun utilisateur trouvé !");
          }
        })
        .catch((error) => {
          console.error(
            "Erreur de récupération des données utilisateur : ",
            error
          );
        });
    }
  }, [user]); // Utiliser l'Uid de l'utilisateur dans le useEffect pour récupérer les données

  return (
    <>
      <Header />
      <main>
        <div className="cover">
          <img src="/images/Cover.png" alt="Cover de la page d'accueil" />
          <div className="cover__text">
            {user && userData ? (
              <h2>Library Space de {userData.username} !</h2>
            ) : (
              <h2>Your Library Space</h2>
            )}
            <p>
              Explorez, organisez et personnalisez votre bibliothèque idéale, où
              chaque livre raconte une histoire rien qu'à vous.
            </p>
          </div>
        </div>
        <div className="library">
          <div className="library__search">
            <Recherche />
          </div>
          <div className="library__filter">
            <Filtres />
          </div>
          <div className="library__personal">
            <Livres />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bibliotheque;
