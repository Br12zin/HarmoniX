"use client";


import GreyCard from "@/app/pages/main/components/gray-card";
import Carousel from "@/app/pages/main/components/carousel";
import NavMain from "@/components/nav-main";
import Footer from "@/components/Footer";
import { useVisibility } from "@/components/VisibilityContext";

const Main = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <div className="min-h-screen bg-[#F2F1F1] flex flex-col">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />

      <Carousel />

      <div className="my-10 flex flex-wrap justify-center gap-10 px-4">
        <GreyCard
          imagem="/img/instruments-2.png"
          titulo="Instrumentos"
          paragrafo="Encontre os melhores instrumentos musicais, 
com o melhor preço e as melhores recomendações"
          link="/pages/CategoriaMarcas"
        />

        <GreyCard
          link="/pages/Marcas"
          imagem="/img/brand-1.png"
          titulo="Marcas"
          paragrafo="Encontre as principais marcas fornecedoras 
de instrumentos musicais do mercado"
        />
      </div>

      <Footer rodape="bg-[#F2F1F1]" txt="text-[#000000]" />
    </div>
  );
};

export default Main;
