"use client";

import MaxMinus from "@/components/MaxMinus";
import NavMain from "@/components/nav-main";
import TitleCarrinho from "@/components/TitleCarrinho";
import { Separator } from "@/components/ui/separator";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Carrinho() {
  const [] = useState();
  return (
    <>
      <div className="h-screen w-screen bg-[#ECECEC]">
        <NavMain opacity="opacity-0" />
        <div className="flex h-6 justify-evenly">
          <div className="flex w-[200px] justify-center">
            <TitleCarrinho>Produto</TitleCarrinho>
          </div>
          <div className="flex w-[30rem] justify-evenly gap-52">
            <TitleCarrinho>Preço</TitleCarrinho>
            <TitleCarrinho>Quantidade</TitleCarrinho>
            <TitleCarrinho>Subtotal</TitleCarrinho>
          </div>
        </div>
        <Separator />
        <div className="ms-48 flex h-72 w-full items-center justify-start">
          <div className="flex">
            <button>
              <Trash className="h-[40px] w-full" />
            </button>
            <div className="ms-40 mt-36">
              <Image
                src="/img/saxofoneteste.png"
                alt=""
                width="230"
                height="230"
                className="rounded-3xl border-[2px] border-black"
              />
              <TitleCarrinho tt="text-xl">Saxofone Yamaha</TitleCarrinho>
            </div>
            <div className="ms-80 flex h-5 flex-col items-center justify-center">
              <h1 className="ms-12 text-2xl font-semibold">R$ 5.999,99</h1>
            </div>
            <div className="ms-44 flex items-center text-2xl">
              <MaxMinus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}