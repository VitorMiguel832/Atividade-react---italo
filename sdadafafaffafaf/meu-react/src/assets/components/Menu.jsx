import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
      <Link to="/">Início</Link>
      <Link to="/produtos">Jogos</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </nav>
  );
}

export default Menu;