"use client";

import Image from "next/image";
import { DropDawn } from "./components/DropDawn";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import { sopros, cordas, percussao } from "./data/items-dropdawn";

export default function CategoriaMarcas() {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <div className="h-screen w-screen bg-[#ECECEC]">
      <div>
        <NavMain
          isVisible={isVisible}
          onHandleVisibility={onHandleVisibility}
        />
      </div>
      <div className="mt-20 flex flex-col items-center">
        <div className="mb-12 flex h-16 w-[620px] items-center justify-around rounded-3xl border-[1px] border-slate-300 bg-white">
          <Image
            src="/img/icons/icone-instrumento-corda.png"
            alt=""
            width={30}
            height={30}
            className="box-content rounded-full border-[1px] border-slate-800 p-1"
          />
          <p className="flex items-center text-3xl">Cordas</p>
          <DropDawn itens={cordas} mg="" />
        </div>

        <div className="mb-12 flex h-16 w-[620px] items-center justify-around rounded-3xl border-[1px] border-slate-300 bg-white">
          <Image
            src="/img/icons/icone-instrumento-sopro-metal.png"
            alt=""
            width={30}
            height={30}
            className="box-content rounded-full border-[1px] border-slate-800 p-1"
          />
          <p className="flex items-center text-3xl">Sopros</p>
          <DropDawn itens={sopros} mg="" />
        </div>

        <div className="flex h-16 w-[620px] items-center justify-around rounded-3xl border-[1px] border-slate-300 bg-white">
          <Image
            src="/img/icons/icone-instrumento-percussao.png"
            alt=""
            width={30}
            height={30}
            className="box-content rounded-full border-[1px] border-slate-800 p-1"
          />
          <p className="flex items-center text-3xl">Percussão</p>
          <DropDawn itens={percussao} mg="me-3" />
        </div>
      </div>
    </div>
  );
}
