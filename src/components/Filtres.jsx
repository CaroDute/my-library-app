const Filtres = () => {
  return (
    <>
      <div className="filter">
            <div className="filter__title">
              <h3>Filtres</h3>
            </div>
            <div className="filter__list">
            <button
                className="btn btn-secondary btn-sm"
                type="button"
                aria-expanded="false"
              >
                Tous
              </button>
              <button
                className="btn btn-secondary btn-sm"
                type="button"
                aria-expanded="false"
              >
                Favoris
              </button>
              <button
                className="btn btn-secondary btn-sm "
                type="button"
                aria-expanded="false"
              >
                Lu
              </button>
              <button
                className="btn btn-secondary btn-sm "
                type="button"
                aria-expanded="false"
              >
                En cours
              </button>
              <button
                className="btn btn-secondary btn-sm "
                type="button"
                aria-expanded="false"
              >
                WishList
              </button>
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