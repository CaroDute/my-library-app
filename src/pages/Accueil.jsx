import { NavLink } from "react-router-dom";

const Accueil = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container-title">
          <h1>Bienvenue sur le site la Paupitèque en ligne !</h1>
        </div>
        <div className="home__container-button">
          <NavLink to="/bibliotheque">
          <button>Connexion à ta bibliothèque</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
