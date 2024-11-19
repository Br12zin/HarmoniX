"use client";

import CarrinhoComp from "@/components/carrinhocomp";
// import MaxMinus from "@/components/MaxMinus";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
// import TitleCarrinho from "@/components/TitleCarrinho";
// import { Separator } from "@/components/ui/separator";
// import { Trash } from "lucide-react";
// import Image from "next/image";
// import { useState } from "react";

export default function Carrinho() {
  const {isVisible, onHandleVisibility} = useVisibility();
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
