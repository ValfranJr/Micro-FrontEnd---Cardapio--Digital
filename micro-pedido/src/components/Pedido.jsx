import { useState, useEffect, useRef } from "react";
import styles from "./Pedido.module.css";

export default function Pedido() {
  const [pedido, setPedido] = useState([]);
  const dialogRef = useRef(null);

  const handleOpenDialog = () => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  };

  useEffect(() => {
    const handleAdd = (event) => {
      setPedido((prev) => [...prev, event.detail]);
      // abre o dialog ao adicionar
      if (dialogRef.current && !dialogRef.current.open) {
        dialogRef.current.showModal();
      }
    };

    window.addEventListener("add-to-cart", handleAdd);
    return () => window.removeEventListener("add-to-cart", handleAdd);
  }, []);

  return (
    <div className={styles.container}>
      <dialog className={styles.dialog} ref={dialogRef}>
        {/* Lista de produtos do pedido */}
        <h1 className={styles.title}>Pedido</h1>
        {pedido.length === 0 ? (
          <li>Nenhum produto</li>
        ) : (
          <ul>
            {pedido.map((produto, i) => (
              <li key={i} className={styles.item}>
                {produto.nome} — R$ {Number(produto.preco).toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <form method="dialog">
          <button className={styles.button}>Fechar</button>
        </form>
      </dialog>
      {/* Botão para abrir o dialog */}
      <button onClick={handleOpenDialog} className={styles.button}>
        Abrir o carrinho
      </button>
    </div>
  );
}
