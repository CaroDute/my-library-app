/* eslint-disable react/prop-types */
import { useState } from "react";
import { signIn } from "../firebase/auth/signIn"; // Fonction de connexion Firebase

const SignIn = ({ setShowModal, showSuccessNotification }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      showSuccessNotification("Connexion réussie !");
    } catch (error) {
      setError("Erreur de connexion : " + error.message);
    }
  };

  return (
    <form onSubmit={handleSignIn}>
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
      <button type="submit" className="btn btn-secondary">
        Se connecter
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SignIn;
