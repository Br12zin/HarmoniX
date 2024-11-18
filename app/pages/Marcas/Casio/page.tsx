"use client";

import NavMain from "@/components/nav-main";
import { useVisibility } from "@/components/VisibilityContext";
import ContentMarcas from "@/components/content-marcas";

// O nome do componente pode ser mudado e o widthImg pode ser removido
const Casio = () => {
  const { isVisible, onHandleVisibility } = useVisibility();
  return (
    <div className="">
      <NavMain isVisible={isVisible} onHandleVisibility={onHandleVisibility} />
      <ContentMarcas
        source={"/img/casio-logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="CASIO"
        cardDescription="Essa é uma importante marca japonesa que assume o posto de uma das líderes do mercado mundial. 
Um fato importante é que seus instrumentos têm como proposta um bom custo-benefício, além da qualidade.
A marca surgiu em 1946 em Tóquio, pelas mãos de Tadao Kashio. Curiosamente, ele não era músico, mas, sim, 
um engenheiro especializado em produções tecnológicas."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
