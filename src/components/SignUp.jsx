/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { signUp } from "../firebase/auth/signUp";

const SignUp = ({ setShowModal, showSuccessNotification }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

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
      showSuccessNotification("Inscription réussi !");
    } catch (error) {
      setError("Erreur d'inscription : " + error.message);
    }
  };

  return (
    <form onSubmit={handleSignUp}>
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
      <div className="form-group">
        <label htmlFor="InputPasswordConfirm">Mot de passe à confirmer</label>
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
        <label htmlFor="UserName">Nom d'utilisateur</label>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="form-control"
          id="UserName"
          placeholder="Nom d'utilisateur"
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        S'inscrire
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SignUp;
