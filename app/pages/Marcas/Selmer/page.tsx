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
        source={"/img/henri-selmer-paris-logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Selmer"
        cardDescription="A Selmer é uma marca histórica e renomada no mundo dos instrumentos de sopro, especialmente conhecida por seus saxofones e clarinetes de altíssima qualidade. Fundada em 1885, a Selmer se tornou um símbolo de excelência, sendo a escolha de músicos profissionais em todo o mundo. Seus instrumentos, como o Saxofone Mark VI e o Clarineté Paris, são reverenciados por sua sonoridade rica, precisão e durabilidade. Com um legado de mais de um século, a Selmer continua a ser uma referência na fabricação de instrumentos que inspiram músicos a alcançar novas fronteiras criativas"
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
