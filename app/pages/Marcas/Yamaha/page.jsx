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
        source={"/img/logo_yamaha.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Yamaha"
        cardDescription="
A Yamaha é uma das marcas mais icônicas e diversificadas no mundo dos instrumentos musicais, reconhecida por sua excelência em qualidade e inovação. Fundada em 1887, a Yamaha fabrica desde pianos e guitarras até baterias e sintetizadores, atendendo músicos de todos os estilos e níveis. Seus instrumentos são conhecidos pela durabilidade, precisão sonora e pela combinação de tradição artesanal com tecnologia de ponta. Com mais de um século de história, a Yamaha continua a ser uma referência global, oferecendo instrumentos que inspiram músicos a criar, inovar e se expressar."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
