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
        source={"/img/tagima-logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Tagima"
        cardDescription="
A Tagima é uma marca brasileira renomada na fabricação de guitarras, baixos e instrumentos de corda, conhecida por oferecer qualidade e performance a preços acessíveis. Fundada em 1986, a Tagima se destacou pela produção de instrumentos versáteis que atendem músicos de diversos estilos, do rock ao jazz. Com uma linha que vai de modelos clássicos a designs inovadores, a marca conquistou a confiança de músicos profissionais e amadores no Brasil e no exterior, mantendo um compromisso com a excelência e a customização. A Tagima é sinônimo de tradição e inovação no mercado musical."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
