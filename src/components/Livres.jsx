import books from "../../public/data/books.json";

const Livres = () => {
  return (
    <>
      <div className="books">
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <img src={book.cover} alt={`Couverture de ${book.title}`} />
              <div className="books__details">
                <h5>{book.title}</h5>
                <button>
                  <i className="bi bi-bookmark-heart-fill"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>{" "}
      </div>
    </>
  );
};

export default Livres;
