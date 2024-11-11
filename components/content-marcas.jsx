import Image from "next/image";
import ProductCarrousel from "./product-carrousel";

const ContentMarcas = (props) => {
  return (
    <div>
      <div className="flex">
        <div className="mx-11 flex h-[17.5rem] w-[17.5rem] items-center justify-center rounded-full border-8 border-black bg-white">
          <Image src={props.source} width={200} height={200} alt="Logo Marca" />
        </div>

        <div className="h-[17.5625rem] w-[75.625rem] rounded-[5rem] border border-[#707070] bg-white text-center shadow-lg">
          <h1 className="py-7 text-4xl">CASIO</h1>
          <p className="font mx-20 text-xl font-medium">
            Essa é uma importante marca japonesa que assume o posto de uma das
            líderes do mercado mundial. Um fato importante é que seus
            instrumentos têm como proposta um bom custo-benefício, além da
            qualidade. A marca surgiu em 1946 em Tóquio, pelas mãos de Tadao
            Kashio. Curiosamente, ele não era músico, mas, sim, um engenheiro
            especializado em produções tecnológicas.
          </p>
        </div>
      </div>
      <div className="mx-14 mt-28 text-xl font-medium text-[#6A6868]">
        <h3>ACOMPANHE ABAIXO OS PRINCIPAIS PRODUTOS FORNECIDOS PELA MARCA</h3>
        <span>
          Clique no produto para conhece-lo melhor e adquirir uma experiência
          única ao interagir com ele
        </span>
      </div>
      <ProductCarrousel />
      <div></div>
    </div>
  );
};

export default ContentMarcas;
