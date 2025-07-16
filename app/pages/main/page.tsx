"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import GreyCard from "@/app/pages/main/components/gray-card";
import Carousel from "@/app/pages/main/components/carousel";
import NavMain from "@/components/nav-main";
import Footer from "@/app/pages/main/components/Footer";
import { useVisibility } from "@/components/VisibilityContext";

const Main = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <div className="min-h-screen bg-main flex flex-col">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <div className={`relative mx-auto mt-6 w-full max-w-[700px] px-4`}>
        <input
          className="w-full rounded-full border border-black border-opacity-30 px-10 py-3 text-sm placeholder:text-gray-500 shadow-md outline-none transition-all focus:ring-2 focus:ring-slate-400"
          type="text"
          placeholder="Pesquise Aqui o que você procura"
          style={{ background: "#F2F1F1" }} 
        />
        <Link href="#" className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">
          <Search className="h-5 w-5" />
        </Link>
      </div>
      <Carousel />
      <section className="py-12 flex flex-wrap justify-center gap-8 sm:gap-10 px-4">
        <GreyCard
          imagem="/img/instruments-2.png"
          titulo="Instrumentos"
          paragrafo="Encontre os melhores instrumentos musicais, com o melhor preço e as melhores recomendações"
          link="/pages/CategoriaMarcas"
        />
        <GreyCard
          link="/pages/Marcas"
          imagem="/img/brand-1.png"
          titulo="Marcas"
          paragrafo="Encontre as principais marcas fornecedoras de instrumentos musicais do mercado"
        />
      </section>
      <Footer tamanho="" rodape="bg-gradient-to-b from-slate-100 to-[#C7A315]" txt="text-[#000000]"  />
    </div>
  );
};

export default Main;
