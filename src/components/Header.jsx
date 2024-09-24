import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="header__title">
          <h2>Paupitèque</h2>
        </div>
        <div className="header__link">
          <NavLink to="/">
            <button>Se déconnecter</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
