"use client";

import GreyCard from "@/app/pages/main/components/gray-card";

import Carousel from "@/app/pages/main/components/carousel";

import NavMain from "@/components/nav-main";
// import ImgInstrumento from "@/app/assets/images/instruments-2.png";
import { useVisibility } from "@/components/VisibilityContext";

const Main = () => {
  const { isVisible, onHandleVisibility } = useVisibility();

  return (
    <>
      <div></div>
      <div className="h-auto min-h-screen">
        <NavMain
          isVisible={isVisible}
          onHandleVisibility={onHandleVisibility}
        />

        <Carousel />
        <div className="my-16 flex h-[17.43rem] justify-center gap-20">
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
          {/* <div className="w-[31.25rem] rounded-[3rem] bg-card"></div>
        <div className="w-[31.25rem] rounded-[3rem] bg-card"></div> */}
        </div>
      </div>
    </>
  );
};

export default Main;
