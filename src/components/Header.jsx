import Login from "./Login";


const Header = () => {
  return (
    <div className="container-fluid p-0">
      <div className="header d-flex justify-content-between align-items-center text-white">
        <div className="header__title">
          <h2 className="mb-0">MyLibrarySpace</h2>
          <p>Bibliothèque en ligne</p>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Header;
