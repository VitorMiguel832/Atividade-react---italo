import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container notfound">
      <h2>404 - Página não encontrada</h2>

      <p>Desculpe, essa página não existe.</p>

      <Link to="/">Voltar para o início</Link>
    </main>
  );
}

export default NotFound;