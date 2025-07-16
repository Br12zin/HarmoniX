import CardInstrumentos from "./cardInstrumentos";
import { IProduct } from "@/app/interfaces/IProduct";

interface TiposInstrumentosProps {
  titulo: string;
  instrumentoObj: IProduct[];
}

const TiposIntrumentos = ({
  titulo,
  instrumentoObj,
}: TiposInstrumentosProps) => {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-medium capitalize md:text-4xl">
        {titulo}
      </h1>
      <div className="mx-4 my-10 2xl:mx-32">
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {instrumentoObj.map((instrumento) => (
            <CardInstrumentos
              key={instrumento.id_produto}
              namecard={instrumento.produto}
              image={instrumento.imagem}
              oldPrice={instrumento.preco.toString()}
              newPrice={(instrumento.preco - instrumento.desconto).toString()}
              id={instrumento.id_produto}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TiposIntrumentos;
