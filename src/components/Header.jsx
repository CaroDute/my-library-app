/* eslint-disable react/no-unescaped-entities */
import Login from "./Login";
import SignOut from "./SignOut";


const Header = () => {
  return (
    <div className="container-fluid p-0">
      <div className="header d-flex justify-content-between align-items-center text-white p-3">
        <h2 className="mb-0">Paupithèque</h2>
        <Login />
        <SignOut />
      </div>
    </div>
  );
};

export default Header;
