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
        source={"/img/Gibson_Guitar_logo.svg.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Gibson"
        cardDescription="A Gibson é uma marca icônica de instrumentos musicais, reconhecida por suas guitarras e baixos de altíssima qualidade. Fundada em 1902, a Gibson moldou o som de estilos como rock, blues e metal, com modelos lendários como a Les Paul, a SG e a Flying V, que são adorados por músicos ao redor do mundo. Com um compromisso com a inovação e a tradição, a marca continua a ser um símbolo de excelência e criatividade no universo musical."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
