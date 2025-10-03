import styles from "./Menu.module.css";

// Lista de produtos
const PRODUTOS = [
  { id: 1, nome: "Filé de Frango Grelhado",descricao: "Uma filé de frango grelhado é um alimento rico em proteína e gordura, que é rico em vitaminas e minerais. É uma opção popular para aqueles que buscam uma dieta saudável e equilibrada.", preco: 25.0 },
  { id: 2, nome: "Salada Caesar",descricao: "A salada caçadora é um alimento rico em proteína e gordura, que é rico em vitaminas e minerais. É uma opção popular para aqueles que buscam uma dieta saudável e equilibrada.", preco: 18.5 },
  { id: 3, nome: "Espaguete à Bolonhesa",descricao: "Uma espaguete à bolonhesa é um alimento rico em proteína e gordura, que é rico em vitaminas e minerais. É uma opção popular para aqueles que buscam uma dieta saudável e equilibrada.", preco: 30.0 },
  { id: 4, nome: "Sopa de Legumes",descricao: "Uma sopa de legumes é um alimento rico em proteína e gordura, que é rico em vitaminas e minerais. É uma opção popular para aqueles que buscam uma dieta saudável e equilibrada.", preco: 15.0 },
  { id: 5, nome: "Torta de Maçã",descricao: "Uma torca de maçã é um alimento rico em proteína e gordura, que é rico em vitaminas e minerais. É uma opção popular para aqueles que buscam uma dieta saudável e equilibrada.", preco: 12.0 },
];

export default function Menu() {
  return (
    //  Container principal do menu
    <div className={styles.container}>
      <h1 className={styles.title}>Menu</h1>
      <div className={styles.list}>
        {/* Lista de produtos */}
        {PRODUTOS.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <div>
              <div>
                <h2 className={styles.productName}>{produto.nome}</h2>
                <p className={styles.productDescription}>{produto.descricao}</p>
                <p className={styles.productPrice}>R$ {produto.preco.toFixed(2)}</p>
              </div>
            </div>
            {/* Botão para adicionar ao carrinho */}
            <button
              className={styles.button}
              onClick={() => {
                const event = new CustomEvent("add-to-cart", {
                  detail: produto,
                });
                window.dispatchEvent(event); // Dispara o evento com os detalhes do produto adicionado
              }}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
