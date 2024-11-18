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
        source={"/img/crafter-logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="CRAFTER"
        cardDescription="A Crafter é uma renomada marca de instrumentos musicais, especialmente conhecida por suas guitarras acústicas e elétricas de alta qualidade. Fundada na Coreia do Sul, a Crafter combina artesanato tradicional com tecnologia moderna, oferecendo instrumentos que atendem tanto músicos iniciantes quanto profissionais. Com um foco em sonoridade rica e designs elegantes, a marca se destaca pela durabilidade e pelo excelente custo-benefício, conquistando o coração de guitarristas ao redor do mundo."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
