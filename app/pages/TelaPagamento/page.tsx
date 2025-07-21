"use client";

import NavMain from "@/components/nav-main";
import PaymentForm from "@/app/pages/TelaPagamento/components/PaymentForm";
import { useVisibility } from "@/components/VisibilityContext";

export default function Checkout() {
    const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col no-scroll">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility}/>

     <main className="flex flex-col md:flex-row gap-10 px-6 md:px-12 py-10 max-w-7xl mx-auto w-full bg-[#f3f3f3]">
  {/* Resumo */}
  <section className="bg-white shadow-xl rounded-3xl p-8 w-full md:w-1/2 border border-gray-200">
    <h2 className="text-2xl font-semibold text-[#C7A315] border-b-2 border-[#C7A315] pb-4 mb-6">Resumo da Compra</h2>
    <ul className="divide-y divide-gray-200 text-gray-700 text-base space-y-2">
      <li className="flex justify-between py-2">
        <span>Guitarra Fender Stratocaster</span>
        <span className="font-medium">R$ 3.500,00</span>
      </li>
      <li className="flex justify-between py-2">
        <span>Amplificador Marshall</span>
        <span className="font-medium">R$ 2.200,00</span>
      </li>
    </ul>
    <div className="border-t mt-6 pt-4 flex justify-between text-lg font-bold text-gray-900">
      <span>Total</span>
      <span className="text-[#C7A315]">R$ 5.700,00</span>
    </div>
  </section>

  {/* Formulário de Pagamento */}
  <section className="bg-white shadow-xl rounded-3xl p-8 w-full md:w-1/2 border border-gray-200">
    <h2 className="text-2xl font-semibold text-[#C7A315] border-b-2 border-[#C7A315] pb-4 mb-6">Dados de Pagamento</h2>
    <PaymentForm />
  </section>
</main>


    </div>
  );
}
