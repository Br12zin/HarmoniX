import Image from "next/image";
import ProductCarrousel from "./product-carrousel";

const ContentMarcas = (props) => {
  return (
    <div>
      <div className="flex">
        <div className="absolute mx-11 flex h-[280px] w-[280px] items-center justify-center rounded-full border-8 border-black bg-white">
          <Image src={props.source} width={200} height={200} alt="Logo Marca" />
        </div>

        <div className="me-[23rem] ms-[23rem] min-h-[17.5625rem] w-auto rounded-[5rem] border border-[#707070] bg-white text-center shadow-lg">
          <h1 className="py-7 text-4xl">{props.cardTitle}</h1>
          <p className="font mx-20 text-xl font-medium">
            {props.cardDescription}
          </p>
        </div>
      </div>
      <div className="mx-14 mt-28 text-xl font-medium text-[#6A6868]">
        <h3 className="fontQuiche">
          ACOMPANHE ABAIXO OS PRINCIPAIS PRODUTOS FORNECIDOS PELA MARCA
        </h3>
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
