import { useState } from "react";
import Button from "../components/Button";

function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(event) {
    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (
    <main className="container">
      <h2>Entre em contato</h2>

      <form className="formulario" onSubmit={enviarFormulario}>
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <label>E-mail:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mensagem:</label>
        <textarea
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />

        <Button type="submit">Enviar mensagem</Button>
      </form>
    </main>
  );
}

export default Contato;