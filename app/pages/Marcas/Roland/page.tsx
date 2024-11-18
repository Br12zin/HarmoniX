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
        source={"/img/roland-logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Roland"
        cardDescription="A Roland é uma marca pioneira em instrumentos musicais eletrônicos, reconhecida por sua inovação e qualidade. Desde 1972, a Roland tem sido líder na criação de teclados, baterias eletrônicas e sintetizadores, moldando o som de gêneros como pop, rock e eletrônica. Modelos icônicos como a TR-808, a Jupiter-8 e a V-Drums são essenciais para músicos e produtores, oferecendo possibilidades sonoras ilimitadas. Com sua constante busca por inovação, a Roland continua a ser uma referência para músicos ao redor do mundo.
"
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
