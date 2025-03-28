import CardInstrumentos from "./cardInstrumentos";

interface TiposInstrumentosProps {
  titulo: string;
  instrumentoObj: {
    id: string;
    namecard: string;
    image: string;
    oldPrice: string;
    newPrice: string;
  }[];
}

const TiposIntrumentos = ({
  titulo,
  instrumentoObj,
}: TiposInstrumentosProps) => {
  return (
    <>
      <h1 className="flex justify-center text-4xl font-medium">{titulo}</h1>
      <div className="mx-52 my-10">
        <div className="grid grid-cols-4">
          {instrumentoObj.map((instrumento) => (
            <CardInstrumentos
              key={instrumento.id}
              namecard={instrumento.namecard}
              image={instrumento.image}
              oldPrice={instrumento.oldPrice}
              newPrice={instrumento.newPrice}
              id={instrumento.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TiposIntrumentos;
