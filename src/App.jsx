import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bibliotheque from "./pages/Bibliotheque";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Bibliotheque />} />
          </Routes>
        </>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
