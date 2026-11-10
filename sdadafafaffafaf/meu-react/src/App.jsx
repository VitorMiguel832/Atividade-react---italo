
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Componentes
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

// Páginas
import Home from "./assets/pages/Home";
import Produtos from "./assets/pages/Produtos";
import Sobre from "./assets/pages/Sobre";
import Contato from "./assets/pages/Contato";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
