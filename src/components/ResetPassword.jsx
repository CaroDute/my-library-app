/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = ({ showSuccessNotification }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage(
        "Un email de réinitialisation a été envoyé à votre adresse email."
      );
      setEmail("");
      setError("");
      showSuccessNotification("Email de réinitialisation envoyé !");
    } catch (error) {
      setError(
        "Erreur lors de l'envoi de l'email de réinitialisation : " +
          error.message
      );
    }
  };

  return (
    <form onSubmit={handlePasswordReset}>
      <div className="form-group">
        <label htmlFor="resetEmail">Adresse email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="resetEmail"
          className="form-control"
          placeholder="Entrez votre email"
        />
      </div>
      <button type="submit" className="btn btn-secondary">
        Réinitialiser le mot de passe
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "black" }}>{successMessage}</p>}
    </form>
  );
};

export default ResetPassword;
