"use client"

import Image from "next/image";
import Button from "../button";
// import { Link } from "lucide-react";
import Link from "next/link";

interface InstrumentItemProps {
  instrument: {
    id: string;
    namecard: string;
    nome: string;
    oldPrice: string;
    newPrice: string;
    image: string;
    informacoes: string;
    marca: string;
    modelo: string;
    teclasnum: string;
    sobreMarca: string;
  };
}

const InstrumentItemCard = ({instrument}:InstrumentItemProps) => {

   
  return (
    <>
      <Link href={`/Instrumento/${instrument.id}`}>
        <div className="mt-4 cursor-pointer">
          <button
            onClick={() => {
              console.log("aqui vai mandar as info pra pagina");
            }}
          >
            <Image
              src={instrument.image}
              alt={instrument.nome}
              width={300}
              height={200}
              objectFit="contain"
              className="rounded-3xl"
            />
          </button>
          <h3 className="mt-5 text-2xl font-bold text-[#C7A315]">
            {instrument.namecard}
          </h3>
          <div className="m-5 flex items-baseline justify-center gap-4">
            <p className="text-2xl text-slate-400 line-through">
              R${instrument.oldPrice}
            </p>
            <p className="text-4xl font-semibold text-[#C7A315]">
              R${instrument.newPrice}
            </p>
          </div>
        </div>
      </Link>
      <div>
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
    </>
  );
};

export default InstrumentItemCard;
