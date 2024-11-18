import CardInstrumentos from "./cardInstrumentos";

const TiposIntrumentos = (props) => {
  return (
    <>
      <h1 className="flex justify-center text-4xl font-medium">
        {props.titulo}
      </h1>
      <div className="mx-52 my-10">
        <div className="grid grid-cols-5">
          <CardInstrumentos nome={props.nome} />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
          <CardInstrumentos />
        </div>
      </div>
    </>
  );
};

export default TiposIntrumentos;
