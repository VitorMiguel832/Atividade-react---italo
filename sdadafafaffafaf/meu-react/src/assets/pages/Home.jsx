
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Home() {
  return (
    <main
      className="home"
      style={{
        backgroundColor: "#111827",
        color: "white",
        minHeight: "70vh",
        padding: "50px",
        textAlign: "center"
      }}
    >
      <h1>🎮 Bem-vindo à GameStore!</h1>

      <h2>Os melhores jogos estão aqui!</h2>

      <p>
        Encontre seus jogos favoritos em nossa loja virtual.
        <br />
        Temos opções para todos os estilos de jogadores!
      </p>

      <Link to="/produtos">
        <Button>Ver jogos</Button>
      </Link>
    </main>
  );
}

export default Home;
