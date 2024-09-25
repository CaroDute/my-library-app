import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3">
        <h2 className="mb-0">Paupitèque</h2>
        <NavLink to="/">
          <button className=" btn btn-primary">Se déconnecter</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
// const Header = () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="header__title">
//           <h2>Paupitèque</h2>
//         </div>
//         <div className="header__link">
//           <NavLink to="/">
//             <button>Se déconnecter</button>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };
