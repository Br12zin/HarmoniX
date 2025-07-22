import { useEffect, useState } from "react";
import TitleCarrinho from "./TitleCarrinho";
import { Trash } from "lucide-react";
import Image from "next/image";
import MaxMinus from "./MaxMinus"; // Componente para aumentar e diminuir a quantidade
import Button from "./button";

// import InstrumentItemCard from "./Produto/InstrumentItemCard";

// Função para adicionar um item ao carrinho
// const adicionarAoCarrinho = (setItensCarrinho, itensCarrinho, produto) => {
//   setItensCarrinho([...itensCarrinho, produto]);
// };

// Função para remover um item do carrinho
const removerDoCarrinho = (
  index: number,
  itensCarrinho: unknown[],
  setItensCarrinho: React.Dispatch<React.SetStateAction<unknown[]>>,
) => {
  const novosItens = [...itensCarrinho];
  novosItens.splice(index, 1); // Remove o item no índice especificado
  setItensCarrinho(novosItens); // Atualiza o estado
};

// Componente CarrinhoComp
// export default function CarrinhoComp({ instrumento }) {
export default function CarrinhoComp() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  useEffect(() => {
    // Obter a posição do localStorage
    const position = localStorage.getItem("position");

    // Verificar se a posição foi salva e se é um número válido
    if (position !== null) {
      const positionIndex = parseInt(position) - 1;

      if (!isNaN(positionIndex)) {
        console.log("Position recebido:", positionIndex);

        // Aqui você pode usar a posição para acessar o item no array violao
        const price = parseFloat(violao[positionIndex].newPrice);

        // Atualizar o estado de itensCarrinho
        setItensCarrinho([
          {
            nome: violao[positionIndex].nome,
            preco: price,
            quantidade: 1,
            imagem: violao[positionIndex].image,
          },
        ]);
      } else {
        console.error("Valor de position inválido:", position);
      }
    }
  }, []);

  const price = parseFloat(violao[0].newPrice);
  // Estado para armazenar os itens do carrinho

  // Função para incrementar a quantidade de um item no carrinho
  const incrementarQuantidade = (index) => {
    const novosItens = [...itensCarrinho];
    novosItens[index].quantidade += 1; // Aumenta a quantidade do item
    setItensCarrinho(novosItens); // Atualiza o estado
  };

  // Função para decrementar a quantidade de um item no carrinho
  const decrementarQuantidade = (index) => {
    const novosItens = [...itensCarrinho];
    if (novosItens[index].quantidade > 1) {
      novosItens[index].quantidade -= 1; // Diminui a quantidade do item
    }
    setItensCarrinho(novosItens); // Atualiza o estado
  };

  // Produto fixo para adicionar ao carrinho
  const produtoExemplo = {
    nome: violao[0].nome,
    preco: price,
    quantidade: 1,
    imagem: violao[0].image,
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      {/* Títulos das colunas do carrinho */}
      <div className="mb-4 grid w-full grid-cols-5 gap-8 border-b-2 border-black">
        <TitleCarrinho>Produto</TitleCarrinho>
        <TitleCarrinho>Preço</TitleCarrinho>
        <TitleCarrinho>Quantidade</TitleCarrinho>
        <TitleCarrinho>Subtotal</TitleCarrinho>
      </div>

      {/* Botão de adicionar ao carrinho */}
      {/* <button
        onClick={() =>
          adicionarAoCarrinho(setItensCarrinho, itensCarrinho, produtoExemplo)
        }
        className="mb-4 rounded-lg bg-blue-500 p-2 text-white"
      >
        Adicionar ao Carrinho
      </button> */}

      {/* Renderiza os itens no carrinho */}
      {itensCarrinho.length === 0 ? (
        <div className="text-xl">Não há itens no carrinho.</div>
      ) : (
        itensCarrinho.map((item, index) => {
          const subtotal = item.preco * item.quantidade; // Cálculo do subtotal (preço * quantidade)

          return (
            <div
              key={index}
              className="mb-4 grid w-full grid-cols-5 items-center gap-8"
            >
              {/* Imagem do item */}
              <div className="ms-10 flex flex-col justify-center">
                <Image
                  src={item.imagem}
                  alt={item.nome}
                  width={240}
                  height={240}
                />
                <TitleCarrinho>{item.nome}</TitleCarrinho>
              </div>

              {/* Preço do produto */}
              <TitleCarrinho>
                <span className="font-light">R$ </span> {item.preco}{" "}
              </TitleCarrinho>

              {/* MaxMinus - Botões de incremento e decremento */}
              <MaxMinus
                quantidade={item.quantidade}
                incrementar={() => incrementarQuantidade(index)}
                decrementar={() => decrementarQuantidade(index)}
              />

              {/* Subtotal */}
              <TitleCarrinho>
                <span className="font-light">R$ </span> {subtotal}{" "}
              </TitleCarrinho>

              {/* Botão de remoção */}
              <div className="flex justify-center text-2xl">
                <button
                  onClick={() =>
                    removerDoCarrinho(index, itensCarrinho, setItensCarrinho)
                  }
                >
                  <Trash />
                </button>
              </div>
            </div>
          );
        })
      )}

      {/* Rodapé */}
      <div className="mt-8 flex w-full items-center justify-end border-t-2 border-black">
        {/* Total */}
        <div className="flex items-center space-x-4">
          <TitleCarrinho>Total:</TitleCarrinho>
          <TitleCarrinho>
            <span className="font-light">R$ </span>
            {itensCarrinho.reduce(
              (acc, item) => acc + item.preco * item.quantidade,
              0,
            )}{" "}
          </TitleCarrinho>
          {/* Botão de Finalizar Compra */}
          <Button btn="ms-28  me-8 text-xl">Finalizar compra</Button>
        </div>
      </div>
    </div>
  );
}
