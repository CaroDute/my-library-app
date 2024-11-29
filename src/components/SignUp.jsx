// /* eslint-disable react/no-unescaped-entities */
// import { signUp } from "../firebase/auth/signUp";
// import { useState } from "react";

// function SignUp() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   // Fonction pour l'inscription
//   const handleSignUp = async (e) => {
//     e.preventDefault(); // Empêche le rechargement de la page par défaut

//     if (!email || !password || !confirmPassword) {
//       setError("Tout les champs doivent être remplis !");
//       return;
//     }
  
//     if (password !== confirmPassword) {
//       setError("Les mots de passe doivent être identiques");
//     }
  
//     if (password.length < 8) {
//       setError("Le mot de passe doit contenir au moins 8 caractères");
//     }
    
//     try {
//       await signUp(email, password);
//       setError(""); // Réinitialiser les erreurs
//       alert("Inscription réussie !");
//     } catch (error) {
//       setError("Erreur d'inscription : " + error.message);
//     }
//   };

//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="InputEmail1">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           id="InputEmail1"
//           aria-describedby="emailHelp"
//           placeholder="Enter email"
//         />
//         <small id="emailHelp" className="form-text text-muted">
//           We'll never share your email with anyone else.
//         </small>
//       </div>
//       <div className="form-group">
//         <label htmlFor="InputPassword">Password</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-control"
//           id="InputPassword"
//           placeholder="Password"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="InputPasswordConfirm">Confirm password</label>
//         <input
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           type="password"
//           className="form-control"
//           id="InputPasswordConfirm"
//           placeholder="Password"
//         />
//       </div>
//       <button onClick={handleSignUp} type="submit" className="btn btn-primary">
//         Submit
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       {/* Afficher les erreurs */}
//     </form>
//   );
// }

// export default SignUp;
