import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Bibliotheque from "./pages/Bibliotheque";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Bibliotheque" element={<Bibliotheque />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
