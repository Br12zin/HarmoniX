import { violao, teclado } from "./Produto/data";
import Image from "next/image";
import Button from "./button";

interface CardProps {
  posicao: number;
  instrumentos: violao | teclado; // Ou o tipo específico do objeto de instrumento que deseja
}

const Card: React.FC<CardProps> = ({ posicao, instrumentos }) => {
  const instrumento = instrumentos[posicao];

  return (
    <div className="mt-4">
      <button
        onClick={() => {
          console.log("aqui vai mandar as info pra pagina");
        }}
      >
        <Image
          src={instrumento.image}
          alt={instrumento.nome}
          width={300}
          height={200}
          objectFit="contain"
          className="rounded-3xl"
        />
      </button>
      <h3 className="mt-5 text-2xl font-bold text-[#C7A315]">
        {instrumento.namecard}
      </h3>
      <div className="m-5 flex items-baseline justify-center gap-4">
        <p className="text-2xl text-slate-400 line-through">
          R${instrumento.oldPrice}
        </p>
        <p className="text-4xl font-semibold text-[#C7A315]">
          R${instrumento.newPrice}
        </p>
      </div>

      <Button
        onClick={() => {
          console.log("foi pr carrinho");
        }}
        btn="mb-5 text-"
        caminho=""
      >
        Comprar
      </Button>
    </div>
  );
};
export default Card;
