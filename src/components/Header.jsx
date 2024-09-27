import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid p-0">
      <div className="header d-flex justify-content-between align-items-center text-white p-3">
        <h2 className="mb-0">Paupithèque</h2>
        <NavLink to="/">
          <button className=" btn btn-primary">Se déconnecter</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
