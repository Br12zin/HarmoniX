"use client";

import NavMain from "@/components/nav-main";
import PaymentForm from "@/app/pages/TelaPagamento/components/PaymentForm";
import { useVisibility } from "@/components/VisibilityContext";

export default function Checkout() {
    const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col no-scroll">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility}/>

      <main className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto w-full">
        {/* Resumo dos produtos */}
        <section className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Resumo da Compra</h2>
          <ul className="space-y-4">
            <li className="flex justify-between">
              <span>Guitarra Fender Stratocaster</span>
              <span>R$ 3.500,00</span>
            </li>
            <li className="flex justify-between">
              <span>Amplificador Marshall</span>
              <span>R$ 2.200,00</span>
            </li>
          </ul>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>R$ 5.700,00</span>
          </div>
        </section>

        {/* Formulário de pagamento */}
        <section className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/2">
          <PaymentForm />
        </section>
      </main>

    </div>
  );
}
