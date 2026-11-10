function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />

      <div className="card-info">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <strong>{preco}</strong>
      </div>
    </div>
  );
}

export default Card;