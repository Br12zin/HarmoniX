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
        source={"/img/ibanez-logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Ibanez"
        cardDescription="A Ibanez é uma marca icônica de instrumentos musicais, conhecida por suas guitarras e baixos de alta qualidade, que combinam inovação, design arrojado e excelente performance. Fundada no Japão em 1908, a Ibanez conquistou músicos ao redor do mundo com suas ferramentas versáteis, perfeitas para diversos estilos, do rock ao jazz. Com uma dedicação à arte da música, a Ibanez continua a inspirar artistas a expressarem sua criatividade.
"
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
