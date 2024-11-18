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
        source={"/img/Takamine_guitar_logo.png"}
        widthImg="200"
        heightImg="200"
        cardTitle="Takamine"
        cardDescription="

A Takamine é uma marca japonesa renomada, especializada em violões acústicos e eletroacústicos de alta qualidade. Fundada em 1962, a Takamine se destacou pela inovação e sonoridade excepcional, sendo a escolha de músicos renomados, especialmente no country e folk. Seus violões são conhecidos pelo conforto, timbre rico e sistemas de captação avançados, oferecendo um som natural e potente tanto em performances acústicas quanto amplificadas. Com mais de 60 anos de história, a Takamine continua a ser sinônimo de excelência e tradição."
        // ProductCarrousel={}
      ></ContentMarcas>
    </div>
  );
};

export default Casio;
