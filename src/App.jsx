import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Bibliotheque from "./pages/Bibliotheque";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Bibliotheque" element={<Bibliotheque />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
