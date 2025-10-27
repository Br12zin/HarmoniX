import { useEffect, useState } from "react";
import TitleCarrinho from "./TitleCarrinho";
import { Trash } from "lucide-react";
import MaxMinus from "./MaxMinus";
import Button from "./button";
import { fetchCarrinho } from "@/app/services/carrinho/get";
import { formatter } from "@/app/utils/formatadorDeMoeda";
import { editCart } from "@/app/services/carrinho/put";
import { deleteItemCart } from "@/app/services/carrinho/delete";
import { getClienteId } from "@/app/services/clientes/get";

interface ItemCarrinho {
  id_produto: number;
  id_carrinho: number;
  cliente_id: number;
  produto: string;
  preco: number;
  desconto: number;
  quantidade: number;
}

export default function CarrinhoComp() {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[] | null>(null);
  const [cliente_id, setCliente_id] = useState<number | null>(null);

  useEffect(() => {
    const fetchClienteId = async () => {
      const id = await getClienteId();
      console.log("Cliente ID:", id);
      if (id) {
        setCliente_id(id);
      }
    };

    fetchClienteId();
  }, []);

  useEffect(() => {
    const LoadCarrinho = async () => {
      try {
        const carrinhoCarregado = await fetchCarrinho(cliente_id as number);
        setCarrinho(carrinhoCarregado || null);
      } catch (err) {
        console.error(err);
      }
    };
    LoadCarrinho();
  }, [cliente_id]);

  // Função para remover item do carrinho
  const removerDoCarrinho = (
    index: number,
    id_produto: number,
    id_cliente: number,
  ) => {
    if (!carrinho) return;
    const novosItens = [...carrinho];
    novosItens.splice(index, 1);
    setCarrinho(novosItens);
    deleteItemCart(id_produto, id_cliente);
  };

  // Função para incrementar quantidade
  const incrementarQuantidade = (index: number) => {
    if (!carrinho) return;
    const novosItens = [...carrinho];
    novosItens[index].quantidade += 1;
    setCarrinho(novosItens);
  };

  // Função para decrementar quantidade
  const decrementarQuantidade = (index: number) => {
    if (!carrinho) return;
    const novosItens = [...carrinho];
    if (novosItens[index].quantidade > 1) {
      novosItens[index].quantidade -= 1;
      setCarrinho(novosItens);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-10 flex flex-col items-center rounded-2xl bg-[#ECECEC] p-10">
        <div className="mb-4 grid w-full grid-cols-5 gap-8 border-b-2 border-black">
          <TitleCarrinho>Produto</TitleCarrinho>
          <TitleCarrinho>Preço</TitleCarrinho>
          <TitleCarrinho>Quantidade</TitleCarrinho>
          <TitleCarrinho>Subtotal</TitleCarrinho>
          <div></div>
        </div>
        {!carrinho || !Array.isArray(carrinho) || carrinho.length === 0 ? (
          <div className="text-xl">Não há itens no carrinho.</div>
        ) : (
          carrinho.map((item: ItemCarrinho, index: number) => {
            const subtotal = formatter.format(item.preco * item.quantidade);
            return (
              <div
                key={item.id_carrinho}
                className="mb-4 grid w-full grid-cols-5 items-center gap-8"
              >
                <div className="ms-10 flex flex-col justify-center">
                  <TitleCarrinho>{item.produto}</TitleCarrinho>
                </div>
                <TitleCarrinho>
                  <span className="font-light"></span>{" "}
                  {formatter.format(item.preco)}
                </TitleCarrinho>
                <MaxMinus
                  quantidade={item.quantidade}
                  incrementar={() => incrementarQuantidade(index)}
                  decrementar={() => decrementarQuantidade(index)}
                />
                <TitleCarrinho>
                  <span className="font-light"></span> {subtotal}
                </TitleCarrinho>
                <div className="flex justify-center text-2xl">
                  <button
                    onClick={() =>
                      removerDoCarrinho(
                        index,
                        item.id_produto,
                        cliente_id as number,
                      )
                    }
                  >
                    <Trash />
                  </button>
                </div>
              </div>
            );
          })
        )}

        <div className="mt-8 flex w-full items-center justify-end border-t-2 border-black">
          <div className="flex items-center space-x-4">
            <TitleCarrinho>Total:</TitleCarrinho>
            <TitleCarrinho>
              <span className="font-light"> </span>
              {formatter.format(
                Array.isArray(carrinho)
                  ? carrinho.reduce(
                      (acc: number, item: ItemCarrinho) =>
                        acc + item.preco * item.quantidade,
                      0,
                    )
                  : 0,
              )}
            </TitleCarrinho>
            <Button
              caminho={"/pages/TelaPagamento"}
              onClick={() => {
                if (Array.isArray(carrinho) && carrinho.length > 0) {
                  carrinho.forEach((item) =>
                    editCart(item, cliente_id as number, item.quantidade),
                  );
                }
              }}
              btn="ms-28  me-8 text-xl"
            >
              Finalizar compra
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
