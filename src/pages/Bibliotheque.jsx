/* eslint-disable react/no-unescaped-entities */
import Livres from "../components/Livres";
import Recherche from "../components/Recherche";
import Header from "../components/Header";
import Filtres from "../components/Filtres";
import Footer from "../components/Footer";

const Bibliotheque = () => {
  return (
    <>
      <Header />
      <div className="cover">
        <img src="/images/Cover.png" alt="Cover de la page d'accueil" />
        <div className="cover__text">
          <h2>Your Library Space</h2>
          <p>
            Explorez, organisez et personnalisez votre bibliothèque idéale, où
            chaque livre raconte une histoire rien qu'à vous.
          </p>
        </div>
      </div>
      <div className="library">
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
      <Footer />
    </>
  );
};

export default Bibliotheque;
