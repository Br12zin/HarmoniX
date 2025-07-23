"use client";

import NavMain from "@/components/nav-main";
import PaymentForm from "@/app/pages/TelaPagamento/components/PaymentForm";
import { useVisibility } from "@/components/VisibilityContext";
import { fetchCarrinho } from "@/app/services/carrinho/get";
import { useEffect, useState } from "react";
import { formatter } from "@/app/utils/formatadorDeMoeda";

interface ItemCarrinho {
  id_carrinho: number;
  produto: string;
  preco: number;
  desconto: number;
  quantidade: number;
}

export default function Checkout() {
  const { isVisible, onHandleVisibility } = useVisibility();
  const [carrinho, setCarrinho] = useState<ItemCarrinho[] | null>(null);

  useEffect(() => {
    const LoadCarrinho = async () => {
      try {
        const carrinhoCarregado = await fetchCarrinho();
        setCarrinho(carrinhoCarregado || null);
      } catch (err) {
        console.error(err);
      }
    };
    LoadCarrinho();
  }, []);
  useEffect(() => {
    console.log("Carrinho atual:", carrinho);
  }, [carrinho]);

  return (
    <div className="no-scroll flex min-h-screen flex-col">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:px-12">
        {/* Resumo */}
        <section className="w-full rounded-3xl border border-gray-200 bg-[#ececec] p-8 shadow-xl md:w-1/2">
          <h2 className="mb-6 border-b-2 border-[#C7A315] pb-4 text-2xl font-semibold text-[#C7A315]">
            Resumo da Compra
          </h2>
          <ul className="space-y-2 divide-y divide-gray-200 text-base text-gray-700">
            {carrinho &&
              carrinho.map((item) => (
                <li
                  key={item.id_carrinho}
                  className="flex justify-between py-2"
                >
                  <span>{item.produto}</span>
                  <span className="font-medium">
                    {(item.preco * item.quantidade).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </li>
              ))}
            {/* <li className="flex justify-between py-2">
        <span>Guitarra Fender Stratocaster</span>
        <span className="font-medium">R$ 3.500,00</span>
      </li>
      <li className="flex justify-between py-2">
        <span>Amplificador Marshall</span>
        <span className="font-medium">R$ 2.200,00</span>
      </li> */}
          </ul>
          <div className="mt-6 flex justify-between border-t pt-4 text-lg font-bold text-gray-900">
            <span>Total</span>
            <span className="text-[#C7A315]"></span>
            {formatter.format(
              Array.isArray(carrinho)
                ? carrinho.reduce(
                    (acc: number, item: ItemCarrinho) =>
                      acc + item.preco * item.quantidade,
                    0,
                  )
                : 0,
            )}
          </div>
        </section>

        {/* Formulário de Pagamento */}
        <section className="w-full rounded-3xl border border-gray-200 bg-[#ececec] p-8 shadow-xl md:w-1/2">
          <h2 className="mb-6 border-b-2 border-[#C7A315] pb-4 text-2xl font-semibold text-[#C7A315]">
            Dados de Pagamento
          </h2>
          <PaymentForm />
        </section>
      </main>
    </div>
  );
}
