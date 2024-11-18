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
        source={"/img/Fender_logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Fender"
        cardDescription="A Fender é uma icônica marca de instrumentos musicais, famosa por suas guitarras e baixos elétricos de alta qualidade. Com um legado que remonta a 1946, a Fender é sinônimo de inovação e estilo, moldando o som do rock, blues e outros gêneros. Seus modelos clássicos, como a Stratocaster e a Telecaster, são adorados por músicos em todo o mundo, representando a essência da criatividade e expressão musical."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
