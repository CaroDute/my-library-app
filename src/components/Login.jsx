/* eslint-disable react/no-unescaped-entities */
import { signUp } from "../firebase/auth/signUp";
import { signIn } from "../firebase/auth/signIn";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { user } = useContext(UserContext);

  ///////// Fonction pour l'inscription /////////
  const handleSignUp = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !email.includes("@") ||
      !userName
    ) {
      setError("Tout les champs doivent être remplis !");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe doivent être identiques");
      return;
    }

    if (password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères");
      return;
    }

    try {
      await signUp(email, password, userName);
      setError(""); // Réinitialiser les erreurs
      setShowModal(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setUserName("");
      showSuccessNotification("Inscription réussie !");
    } catch (error) {
      setError("Erreur d'inscription : " + error.message);
    }
  };

  ///////// Fonction pour la connexion /////////
  const handleSignIn = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    if (!email || !password || !email.includes("@")) {
      setError("L'email ou le mot de passe est incorrect");
      return;
    }

    try {
      await signIn(email, password);
      setError(""); // Réinitialiser les erreurs
      setShowModal(false);
      setEmail("");
      setPassword("");
      showSuccessNotification("Connexion réussie !");
    } catch (error) {
      setError("Erreur de connexion : " + error.message);
    }
  };

  ///////// Fonction pour la deconnexion /////////

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      showSuccessNotification("Tu es bien déconnecté !");
    } catch (error) {
      setError("Erreur de déconnexion : ", error.message);
    }
  };

  // Fonction pour afficher la notification de succès
  const showSuccessNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);

    // Disparaître après 3 secondes
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // La notification disparaît après 3 secondes
  };

  // Fermeture de modale au clic
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && !modalContent.contains(event.target)) {
        setShowModal(false);
        setEmail("");
        setError("");
        setPassword("");
        setConfirmPassword("");
        setUserName("");
      }
    };

    // Ajout de l'eventListener
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    // Nettoyage de l'event listener au démontage du composant ou fermeture modale pour éviter une ecoute inutile à chaque clic sur la page
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <div className="header__login">
        {user ? (
          <>
            <button className=" btn btn-secondary" onClick={handleSignOut}>
              Deconnexion
            </button>
          </>
        ) : (
          <>
            <button
              className=" btn btn-secondary"
              onClick={() => {
                setShowModal(true);
                setIsSignUp(true);
              }}
            >
              S'inscrire
            </button>
            <button
              className=" btn btn-secondary"
              onClick={() => {
                setShowModal(true);
                setIsSignUp(false);
              }}
            >
              Se connecter
            </button>
          </>
        )}
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div
          className="toast rounded-pill show position-fixed bottom-0 end-0 bg-success border-dark border-2 "
          style={{ zIndex: 1050 }}
        >
          <div className="toast-body">{notificationMessage}</div>
        </div>
      )}

      {/* Modale de connexion/inscription */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="loginModal"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginModal">
                  {isSignUp ? "Inscription" : "Connexion"}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShowModal(false);
                    setEmail("");
                    setPassword("");
                    setConfirmPassword("");
                    setUserName("");
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="InputEmail">Adresse email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="InputEmail"
                      placeholder="Entrez votre email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputPassword">Mot de passe</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="InputPassword"
                      placeholder="Entrez votre mot de passe"
                    />
                  </div>
                  {isSignUp && (
                    <>
                      <div className="form-group">
                        <label htmlFor="InputPasswordConfirm">
                          Mot de passe à confirmer
                        </label>
                        <input
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          type="password"
                          className="form-control"
                          id="InputPasswordConfirm"
                          placeholder="Confirmez votre mot de passe"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="UserName">Nom d'Utilisateur</label>
                        <input
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          type="text"
                          className="form-control"
                          id="UserName"
                          placeholder="Nom d'utilisateur"
                        />
                      </div>
                    </>
                  )}
                  <button
                    onClick={isSignUp ? handleSignUp : handleSignIn}
                    type="submit"
                    className="btn btn-secondary"
                  >
                    {isSignUp ? "S'inscrire" : "Se connecter"}
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
