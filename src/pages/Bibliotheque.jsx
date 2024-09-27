import Livres from "../components/Livres";
import Recherche from "../components/Recherche";
import Header from "../components/Header";
import Filtres from "../components/Filtres";

const Bibliotheque = () => {
  return (
    <>
      <div className="library">
        <Header />
        <div className="library__title">
          <h2>Ma Bibliothèque</h2>
        </div>
        <div className="library__search">
          <Recherche />
        </div>

        <div className="library__filter">
          <Filtres />
        </div>
        <div className="library__personal">
          <Livres />
        </div>
      </div>
    </>
  );
};

export default Bibliotheque;
