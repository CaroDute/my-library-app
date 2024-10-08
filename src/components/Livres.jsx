import books from "../../public/data/books.json";

const Livres = () => {
  return (
    <>
      <div className="books">
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <img src={book.cover} alt={`Couverture de ${book.title}`} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Livres;
