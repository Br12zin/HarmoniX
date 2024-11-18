"use client";

import CarrinhoComp from "@/components/carrinhocomp";

import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";

export default function Carrinho() {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <>
      <div className="h-screen w-screen bg-[#ECECEC]">
        <div>
          <NavMain
            isVisible={isVisible}
            onHandleVisibility={onHandleVisibility}
          />
        </div>
        <div>
          <CarrinhoComp />
        </div>
      </div>
    </>
  );
}
