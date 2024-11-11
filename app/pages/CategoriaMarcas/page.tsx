"use client";
import BackBtnSearch from "@/components/BackBtnSearch";
import InputPage from "@/components/InputPage";
import Link from "next/link";
import Image from "next/image";
import { DropDawn } from "@/components/DropDawn";

export default function CategoriaMarcas() {
    return (
      <div className="h-screen w-screen bg-[#ECECEC]">
        <div>
          <div className=" ">
            <Link href="/pages/main">
              <BackBtnSearch btn="iconBack"/>
            </Link>
          </div>
          <div className="flex flex-grow justify-center">
            <Image src="/logo-gold.png" alt="img" width={110} height={110} />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <InputPage />
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
            <DropDawn Item1="Violão" Item2="Guitarra" Item3="Harpa" Item4="Baixo" Item5="Cavaquinho" Item6="Ukulelê" Item7="Violino" Item8="Bandolim" Item9="Violoncelo" mg=""/>
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
            <DropDawn Item1="Saxofone" Item2="Trompete" Item3="Trombone" Item4="Tuba" Item5="Flauta" Item6="Clarinete" Item7="Clarone" Item8="Oboé" Item9="Trompa" mg=""/>
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
            <DropDawn Item1="Teclado" Item2="Bateria" Item3="Tambor" Item4="Triângulo" Item5="Chocalho" Item6="Cajon" Item7="Pandeiro" Item8="Tímoanos" Item9="Agogô" mg="me-3" />
          </div>
        </div>
      </div>
    );
}
