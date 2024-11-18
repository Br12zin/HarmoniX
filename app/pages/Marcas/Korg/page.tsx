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
        source={"/img/Korg_logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Korg"
        cardDescription="A Korg é uma renomada marca japonesa especializada em instrumentos musicais eletrônicos, sintetizadores e equipamentos de produção musical. Fundada em 1963, a Korg se destacou por sua inovação tecnológica, oferecendo produtos que atendem tanto músicos amadores quanto profissionais. Com uma gama diversificada de teclados, sintetizadores, pedais de efeito e ferramentas de gravação, a Korg é sinônimo de qualidade sonora e criatividade, inspirando gerações de artistas a explorarem novas possibilidades musicais.
"
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
