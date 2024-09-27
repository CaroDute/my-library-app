import Livres from "../components/Livres";
import Recherche from "../components/Recherche";
import Header from "../components/Header";
import Filtres from "../components/Filtres";

const Bibliotheque = () => {
  return (
    <div>
      
      <div className="library">
        <Header />
      <div className="library__title">
            <h2>Ma Bibliothèque</h2>
          </div>
        <div className="library__search">
          <div>
            <Recherche />
          </div>
        </div>

        <div className="library__filter">
          <Filtres />
        </div>
        <div>
          <Livres />
        </div>
      </div>
    </div>
  );
};

export default Bibliotheque;
