import Card from "../components/Card";

function Produtos() {
  const jogos = [
    {
      id: 1,
      titulo: "God of War",
      imagem: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
      descricao: "Uma aventura épica cheia de ação.",
      preco: "R$ 149,90"
    },
    {
      id: 2,
      titulo: "Minecraft",
      imagem: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500",
      descricao: "Explore e construa seu próprio mundo.",
      preco: "R$ 99,90"
    },
    {
      id: 3,
      titulo: "FIFA 25",
      imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500",
      descricao: "Viva a emoção do futebol.",
      preco: "R$ 199,90"
    },
    {
      id: 4,
      titulo: "GTA V",
      imagem: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500",
      descricao: "Explore uma cidade cheia de aventuras.",
      preco: "R$ 89,90"
    },
    {
      id: 5,
      titulo: "The Last of Us",
      imagem: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500",
      descricao: "Uma história emocionante de sobrevivência.",
      preco: "R$ 129,90"
    },
    {
      id: 6,
      titulo: "Cyberpunk 2077",
      imagem: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500",
      descricao: "Uma aventura futurista em mundo aberto.",
      preco: "R$ 159,90"
    }
  ];

  return (
    <main className="container">
      <h2>Nossos Jogos</h2>

      <p>Confira alguns dos jogos disponíveis em nossa loja.</p>

      <div className="grid">
        {jogos.map((jogo) => (
          <Card
            key={jogo.id}
            titulo={jogo.titulo}
            imagem={jogo.imagem}
            descricao={jogo.descricao}
            preco={jogo.preco}
          />
        ))}
      </div>
    </main>
  );
}

export default Produtos;