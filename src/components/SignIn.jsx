// /* eslint-disable react/no-unescaped-entities */
// import { signIn } from "../firebase/auth/signIn";
// import { useState } from "react";


// function SignIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // Fonciton pour la connexion
//   const handleSignIn = async (e) => {
//     e.preventDefault(); // Empêche le rechargement de la page par défaut
//     try {
//       await signIn(email, password);
//       setError(""); // Réinitialiser les erreurs
//       alert("Connexion réussie !");
//       console.log("Connexion réussie !")
//     } catch (error) {
//       setError("Erreur de connexion : " + error.message);
//     }

//     if (signIn) {
//       setEmail("")
//       setPassword("")
//     }
//   };

//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="InputEmail">Email address</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="form-control"
//           id="InputEmail"
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
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           className="form-control"
//           id="InputPassword"
//           placeholder="Password"
//         />
//       </div>
//       <button onClick={handleSignIn} type="submit" className="btn btn-primary">
//         Submit
//       </button>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       {/* Afficher les erreurs */}
//     </form>
//   );
// }
// export default SignIn;
