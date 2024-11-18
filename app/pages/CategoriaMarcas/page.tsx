"use client";
import BackBtnSearch from "@/components/BackBtnSearch";
import InputPage from "@/components/InputPage";
import Link from "next/link";
import Image from "next/image";
import { DropDawn } from "@/components/DropDawn";
import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";

export default function CategoriaMarcas() {
    return (
      <div className="h-screen w-screen bg-[#ECECEC]">
        <div>
            <div className=" ">
            <Link href="/">
                <BackBtnSearch btn="iconBack" btns=""/>
            </Link> 
            </div>
          <div className="flex-grow flex justify-center ">
            <Image src="/logo-gold.png" alt="img" width={110} height={110} />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <InputPage />
        </div>
        <div className="flex justify-center mt-20">
        <div className="border-[1px] bg-white w-[600px] h-16 flex rounded-3xl border-slate-300 items-center">
        <Image src="/img/icons/icone-instrumento-corda.png" alt="" width={30} height={30} className="ms-3 w-[30px] h-[30px] circulofundo"/>
        <p className="flex text-3xl items-center ms-3">Cordas</p>
          <DropDawn/>
        </div>
        </div>
        
      </div>
    );
}
