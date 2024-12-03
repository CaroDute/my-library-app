const Filtres = () => {
  return (
    <>
      <div className="filter">
        <div className="filter__title">
          <h3>Filtres</h3>
        </div>
        <div className="filter__list">
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check-tous"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check-tous">
            Tous
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check-favoris"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check-favoris">
            Favoris
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check-lu"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check-lu">
            Lu
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check-encours"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check-encours">
            En cours
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check-wishlist"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check-wishlist">
            WishList
          </label>

          <button
            className="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filtres avancés
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Filtres;
