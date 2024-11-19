import CardInstrumentos from "./cardInstrumentos";

const TiposIntrumentos = ({ titulo, instrumentoObj }) => {
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
