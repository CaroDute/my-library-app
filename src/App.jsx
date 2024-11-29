import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Bibliotheque from "./pages/Bibliotheque";
import Inscription from "./pages/Inscription";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Bibliotheque" element={<Bibliotheque />} />
          <Route path="/Inscription" element={<Inscription />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
