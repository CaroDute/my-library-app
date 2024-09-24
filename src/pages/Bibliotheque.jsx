import { NavLink } from "react-router-dom";
import Livres from "../components/Livres";
import Recherche from "../components/Recherche";

const Bibliotheque = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Retour page connexion</button>
      </NavLink>

      <div>
        <h2>Ma Bibliothèque</h2>
      </div>
      <div>
        <h3>Filtres</h3>
        <ul>
          <li><button>favoris</button></li>
          <li><button>Lu</button></li>
          <li><button>En cours</button></li>
          <li><button>WhishList</button></li>
          <li><button>Filtres avancés</button></li>
        </ul>
      </div>
      <div>
        <h3>Mes livres</h3>
        <Recherche />
        <Livres />
      </div>
    </div>
  );
};

export default Bibliotheque;
