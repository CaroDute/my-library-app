import axios from "axios";
import { useState } from "react";

const Recherche = () => {
  const [query, setQuery] = useState(""); // query : stocke la valeur de la recherche tapée par l'utilisateur
  const [resultats, setResultats] = useState([]); // resultats : stocke les résultats de recherche renvoyés par l'API

  // Fonction qui sera appelée quand l'utilisateur fait une recherche
  const handleRecherche = async () => {
    if (query) {
      // On vérifie que l'utilisateur a bien tapé quelque chose
      try {
        // On envoie une requête GET à l'API Google Books avec la recherche tapée (query)
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDeKtL1eQojXEIYIiISPfkPQOm0_NpdOf4`
        );
        // On stocke les résultats dans l'état resultats
        setResultats(response.data.items);
      } catch (error) {
        console.error("Erreur lors de la requête API Google Books");
      }
    }
  };

  return (
    <div>
      {/* Champ de saisie pour entrer le nom du livre à rechercher */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Met à jour l'état 'query' si le texte change
        placeholder="Rechercher un livre"
      />
      {/* Bouton qui, lorsqu'on clique dessus, déclenche la fonction handleRecherche */}
      <button onClick={handleRecherche}>Rechercher</button>

      {/* On affiche les résultats ici */}
      {resultats.length > 0 && (
        <div className="modal-container">
          {/* Si on a des résultats, on les parcourt et les affiche */}
          <div className="modal">
            <ul>
              {resultats.map((livre) => (
                <li key={livre.id}>
                  {/* On affiche le titre du livre (volumeInfo.title) renvoyé par l'API */}
                  {livre.volumeInfo.title}
                  {livre.volumeInfo.imageLinks?.thumbnail && (
                    <img
                      src={livre.volumeInfo.imageLinks.thumbnail}
                      alt={`Couverture de ${livre.volumeInfo.title}`}
                    />
                  )}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recherche;
