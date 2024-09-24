import Livres from "../components/Livres";
import Recherche from "../components/Recherche";
import Header from "../components/Header";

const Bibliotheque = () => {
  return (
    <div className="library">
      <Header />
      <div className="search">
        <img src="./src/assets/images/Loupe.png" alt="" />
        <Recherche />
      </div>
      <div>
        <div>
          <h2>Ma Bibliothèque</h2>
        </div>
        <div>
          <h3>Filtres</h3>
          <ul>
            <li>
              <button>favoris</button>
            </li>
            <li>
              <button>Lu</button>
            </li>
            <li>
              <button>En cours</button>
            </li>
            <li>
              <button>WhishList</button>
            </li>
            <li>
              <button>Filtres avancés</button>
            </li>
          </ul>
        </div>
        <div>
          <h3>Mes livres</h3>

          <Livres />
        </div>
      </div>
    </div>
  );
};

export default Bibliotheque;
