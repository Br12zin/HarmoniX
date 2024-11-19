"use client";

import Image from "next/image";
import { DropDawn } from "@/components/DropDawn";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";

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
          <DropDawn
            Item1="Violão"
            Item2="Guitarra"
            Item3="Harpa"
            Item4="Baixo"
            Item5="Cavaquinho"
            Item6="Ukulelê"
            Item7="Violino"
            Item8="Bandolim"
            Item9="Violoncelo"
            mg=""
          />
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
          <DropDawn
            Item1="Saxofone"
            Item2="Trompete"
            Item3="Trombone"
            Item4="Tuba"
            Item5="Flauta"
            Item6="Clarinete"
            Item7="Clarone"
            Item8="Oboé"
            Item9="Trompa"
            mg=""
          />
        </div>

        <div className="flex h-16 w-[620px] items-center justify-around rounded-3xl border-[1px] border-slate-300 bg-white">
          <Image
            src="/img/icons/icone-instrumento-percussao.png"
            alt=""
            width={30}
            height={30}
            className="ms-2 box-content rounded-full border-[1px] border-slate-800 p-1"
          />
          <p className="items-center text-3xl">Percussão</p>
          <DropDawn
            Item1="Teclado"
            Item2="Bateria"
            Item3="Tambor"
            Item4="Triângulo"
            Item5="Chocalho"
            Item6="Cajon"
            Item7="Pandeiro"
            Item8="Tímoanos"
            Item9="Agogô"
            mg="me-3"
          />
        </div>
      </div>
    </div>
  );
}

