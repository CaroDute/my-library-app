import axios from "axios";
import { useState, useEffect, useRef } from "react";

const Recherche = () => {
  const [query, setQuery] = useState(""); // query : stocke la valeur de la recherche tapée par l'utilisateur
  const [resultats, setResultats] = useState([]); // resultats : stocke les résultats de recherche renvoyés par l'API
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null); // Référence pour la modale

  // Fonction qui sera appelée quand l'utilisateur fait une recherche
  const handleRecherche = async (e) => {
    e.preventDefault();

    if (query) {
      // On vérifie que l'utilisateur a bien tapé quelque chose
      try {
        // On envoie une requête GET à l'API Google Books avec la recherche tapée (query)
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDeKtL1eQojXEIYIiISPfkPQOm0_NpdOf4`
        );
        console.log(response.data);

        // On stocke les résultats dans l'état resultats
        if (response.data.items && response.data.items.length > 0) {
          setResultats(response.data.items);
          setShowModal(true);
        } else {
          setResultats([]); // Vide les résultats si rien n'est trouvé
          setShowModal(false);
        }
      } catch (error) {
        console.error("Erreur lors de la requête API Google Books", error);
      }
    }
  };

  const closeModal = () => {
    setResultats([]);
    setShowModal(false);
  };

  // Gestion de la fermeture de la modale au clic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Nettoyage de l'écouteur d'événements à la désactivation du composant
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      <div className="container m-3">
        <form className="d-flex position-relative" onSubmit={handleRecherche}>
          <label htmlFor="search-input" className="me-2">
            {" "}
            Rechercher un livre :
          </label>
          {/* Champ de saisie pour entrer le nom du livre à rechercher */}
          <input
            className="form-control form-control-sm search-input me-2"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Met à jour l'état 'query' si le texte change
            placeholder="Ta recherche..."
          />
          {/* Bouton qui, lorsqu'on clique dessus, déclenche la fonction handleRecherche */}
          <button
            className="btn position-absolute top-0 end-0 me-2 "
            onClick={handleRecherche}
            type="button"
          >
            <i className="bi bi-search"></i>
          </button>

          {/* <button
            className="btn btn-primary"
            onClick={handleRecherche}
            type="button"
          >
            Rechercher
          </button> */}
        </form>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-lg"
            role="document"
            ref={modalRef}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Résultats de recherche</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  data-dismiss="modal"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body">
                <ul>
                  {resultats.map((livre) => (
                    <li key={livre.id}>
                      {livre.volumeInfo.imageLinks?.thumbnail && (
                        <img
                          src={livre.volumeInfo.imageLinks.thumbnail}
                          alt={`Couverture de ${livre.volumeInfo.title}`}
                        />
                      )}
                      {livre.volumeInfo.title}
                      <button className="btn btn-secondary">Ajouter</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="modal-footer"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Recherche;
