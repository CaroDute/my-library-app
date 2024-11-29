/* eslint-disable react/no-unescaped-entities */
import { signUp } from "../firebase/auth/signUp";
import { signIn } from "../firebase/auth/signIn";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Fonction pour l'inscription
  const handleSignUp = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    if (!email || !password || !confirmPassword || !email.includes("@")) {
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
      await signUp(email, password);
      setError(""); // Réinitialiser les erreurs
      alert("Inscription réussie !");
      setShowModal(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      setError("Erreur d'inscription : " + error.message);
    }
  };

  // Fonction pour la connexion
  const handleSignIn = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page par défaut

    if (!email || !password || !email.includes("@")) {
      setError("L'email ou le mot de passe est incorrect");
      return;
    }

    try {
      await signIn(email, password);
      setError(""); // Réinitialiser les erreurs
      alert("Connexion réussie !");
      setShowModal(false);
      setEmail("");
      setPassword("");
    } catch (error) {
      setError("Erreur de connexion : " + error.message);
    }
  };

  // Fermeture de modale au clic

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector(".modal-content");
      if (modalContent && !modalContent.contains(event.target)) {
        setShowModal(false);
        setEmail("")
        setError("")
        setPassword("")
        setConfirmPassword("")
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
      <div>
        <button
          className=" btn btn-primary"
          onClick={() => {
            setShowModal(true);
            setIsSignUp(true);

          }}
        >
          S'inscrire
        </button>
        <button
          className=" btn btn-primary"
          onClick={() => {
            setShowModal(true);
            setIsSignUp(false);
          }}
        >
          Se connecter
        </button>
      </div>
      {/* Modale de connexion/inscription */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {isSignUp ? "Inscription" : "Connexion"}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="InputEmail">Email address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      id="InputEmail"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputPassword">Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="InputPassword"
                      placeholder="Password"
                    />
                  </div>
                  {isSignUp && (
                    <div className="form-group">
                      <label htmlFor="InputPasswordConfirm">
                        Confirm password
                      </label>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        id="InputPasswordConfirm"
                        placeholder="Password"
                      />
                    </div>
                  )}
                  <button
                    onClick={isSignUp ? handleSignUp : handleSignIn}
                    type="submit"
                    className="btn btn-primary"
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
// {showModal && (
//             <form>
//               <div className="form-group">
//                 <label htmlFor="InputEmail">Email address</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="form-control"
//                   id="InputEmail"
//                   aria-describedby="emailHelp"
//                   placeholder="Enter email"
//                 />
//                 <small id="emailHelp" className="form-text text-muted">
//                   We'll never share your email with anyone else.
//                 </small>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="InputPassword">Password</label>
//                 <input
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   className="form-control"
//                   id="InputPassword"
//                   placeholder="Password"
//                 />
//               </div>
//               {isSignUp && (
//                 <div className="form-group">
//                   <label htmlFor="InputPasswordConfirm">Confirm password</label>
//                   <input
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     type="password"
//                     className="form-control"
//                     id="InputPasswordConfirm"
//                     placeholder="Password"
//                   />
//                 </div>
//               )}
//               <button
//                 onClick={isSignUp ? handleSignUp : handleSignIn}
//                 type="submit"
//                 className="btn btn-primary"
//               >
//                 {isSignUp ? "S'inscrire" : "Se connecter"}
//               </button>
//               {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//               {/* Afficher les erreurs */}
//             </form>
//       )}