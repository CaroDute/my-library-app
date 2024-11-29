import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bibliotheque from "./pages/Bibliotheque";

const App = () => {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Bibliotheque />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
