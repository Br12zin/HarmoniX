"use client";

import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import ContentMarcas from "@/components/content-marcas";

const Casio = () => {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <div className="">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <ContentMarcas
        source={"/img/Steinway_and_Sons_logo.svg.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Steinway & Sons"
        cardDescription="
A Steinway & Sons é uma das marcas mais prestigiadas no mundo dos pianos, conhecida pela qualidade e artesanato excepcionais de seus instrumentos. Fundada em 1853, a Steinway se tornou sinônimo de excelência, sendo a escolha de pianistas, compositores e orquestras ao redor do mundo. Cada piano é uma obra-prima, construída à mão com precisão e materiais de altíssimo padrão, oferecendo um som incomparável. Com um legado de mais de 170 anos, a Steinway continua a ser a referência em pianos de concerto e performance."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
