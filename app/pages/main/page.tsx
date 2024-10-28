"use client";

import Image from "next/image";
import iconeMenu from "@/public/img/icons/icone-musicmenu.png";
import logoGold from "@/public/img/logo-gold.png"
import iconeBag from "@/public/img/icons/icone-bag-compra.png";
import GreyCard from "@/components/gray-card";
import { Search } from "lucide-react";
import Carousel from "@/components/carousel";
import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
// import ImgInstrumento from "@/app/assets/images/instruments-2.png";

const Main = () => {
  const name = "";
  console.log(name);
  return (
    <>
      <link rel="stylesheet" href="https://use.typekit.net/ytg7ija.css"></link>

      <div className="bg-main h-auto w-auto">
        <AppSidebar />
        <div className="flex h-[6.3rem] justify-between">
          <div className="flex items-center ps-10">
            <Image src={iconeMenu} alt="Icone do Menu" className="w-8"></Image>
          </div>

          <div className="ms-10 flex items-center">
            <Image
              src={logoGold}
              alt="Logo Harmonix"
              className="h-14 w-14"
            ></Image>
          </div>
          <div className="me-10 flex items-center">
            <a href="#">
              <Image
                src={iconeBag}
                alt="Logo Harmonix"
                className="w-20"
              ></Image>
            </a>
          </div>
        </div>
        <div className="relative my-7 flex justify-center">
          <input
            className="font-quiche mx-auto flex w-[500px] rounded-full border border-black border-opacity-30 px-4 py-2 text-sm placeholder-[slate-500] placeholder-opacity-60 shadow-sm shadow-[#00000044] outline-gray-500"
            type="text"
            placeholder="Pesquise Aqui o que você procura"
            style={{ background: "#F2F1F1" }}
          />
          <Link href={"#"} className="absolute top-[0.4rem] ms-[28rem] h-4">
            <Search />
          </Link>
        </div>
        <Carousel />
        <div className="mt-16 flex h-[17.43rem] justify-center gap-20">
          <GreyCard
            imagem="/assets/images/instruments-2.png"
            titulo="Instrumentos"
            paragrafo="Encontre os melhores instrumentos musicais, 
com o melhor preço e as melhores recomendações"
          />
          <GreyCard
            imagem="/assets/images/brand-1.png"
            titulo="Marcas"
            paragrafo="Encontre as principais marcas fornecedoras 
de instrumentos musicais do mercado"
          />
          {/* <div className="w-[31.25rem] rounded-[3rem] bg-card"></div>
        <div className="w-[31.25rem] rounded-[3rem] bg-card"></div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
