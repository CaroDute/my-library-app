/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useContext } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { UserContext } from "../contexts/UserContext";
import ResetPassword from "./ResetPassword";

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [error, setError] = useState();
  const [showReset, setShowReset] = useState(false);

  const { user } = useContext(UserContext);

  ///////// Fonction pour afficher la notification de succès /////////
  const showSuccessNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);

    // Disparaître après 3 secondes
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // La notification disparaît après 3 secondes
  };

  // ///////// Fonction pour la deconnexion /////////
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      showSuccessNotification("Tu es bien déconnecté !");
    } catch (error) {
      setError("Erreur de déconnexion : ", error.message);
    }
  };

  ///////// Fermeture de modale au clic /////////
  const handleClickOutside = (event) => {
    const modalContent = document.querySelector(".modal-content");
    if (modalContent && !modalContent.contains(event.target)) {
      setShowModal(false);
      setShowReset(false);
    }
  };
  // Ajout de l'eventListener
  useEffect(() => {
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
            {error && <p style={{ color: "red" }}>{error}</p>}
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
                  {showReset
                    ? "Réinitialiser le mot de passe"
                    : isSignUp
                    ? "Inscription"
                    : "Connexion"}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShowModal(false);
                    setIsSignUp(false);
                  }}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {showReset ? (
                  <ResetPassword
                    setShowModal={setShowModal}
                    showSuccessNotification={showSuccessNotification}
                  />
                ) : isSignUp ? (
                  <SignUp
                    setShowModal={setShowModal}
                    showSuccessNotification={showSuccessNotification}
                  />
                ) : (
                  <SignIn
                    setShowModal={setShowModal}
                    showSuccessNotification={showSuccessNotification}
                  />
                )}
                {!showReset && !isSignUp && (
                  <button
                    className="btn btn-link"
                    onClick={() => setShowReset(true)}
                  >
                    Mot de passe oublié ?
                  </button>
              )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
