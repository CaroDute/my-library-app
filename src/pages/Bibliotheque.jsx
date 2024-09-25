import Livres from "../components/Livres";
import Recherche from "../components/Recherche";
import Header from "../components/Header";

const Bibliotheque = () => {
  return (
    <div>
      <div className="library">
        <Header />
        <div className="search">
          <div>
            <Recherche />
          </div>
        </div>

        <div className="filter">
          <div className="bibliotheque__title">
            <h2>Ma Bibliothèque</h2>
          </div>
          <div className="filter__content">
            <div className="filter__title">
              <h3>Filtres</h3>
            </div>
            <div>
              <ul className="filter__list">
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
          </div>
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
