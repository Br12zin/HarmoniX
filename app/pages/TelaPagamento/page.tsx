"use client";

import { CardWithForm } from "@/components/cardWithForm";
import CheckoutPage from "@/components/paymentForm";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";

export default function TelaPagamento() {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <>
      <div className="grid w-full grid-cols-2 items-center gap-8">
        {" "}
        {/* Usando grid para dividir em 2 colunas */}
        <div className="no-scroll flex h-screen w-screen flex-col items-center bg-[#ECECEC]">
          <NavMain
            apagar="hidden"
            isVisible={isVisible}
            onHandleVisibility={onHandleVisibility}
          />
          <div className="mt-10 min-h-[40rem] w-[60%] rounded-xl border-[1px] border-slate-300 bg-[#FFFFFF] px-10">
            <CheckoutPage />
          </div>
        </div>
        {/* Segunda div ao lado */}
        {/* <div className="flex min-h-[40rem] w-[60%] items-center rounded-xl justify-center bg-[#EFEFEF]"> */}
          {/* <div className="rounded-xl bg-[#ffffff] p-5"> */}
            {/* <CardWithForm/> */}
            {/* Aqui pode ir o conteúdo da segunda coluna */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
}
