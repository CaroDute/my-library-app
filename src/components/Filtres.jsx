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
            id="btn-check"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check">
            Tous
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check2"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check2">
            Favoris
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check3"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check3">
            Lu
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check4"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check4">
            En cours
          </label>
          <input
            type="checkbox"
            className="btn-check btn"
            id="btn-check5"
            autoComplete="off"
          ></input>
          <label className="btn btn-secondary btn-sm" htmlFor="btn-check5">
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
