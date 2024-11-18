"use client"

import Image from "next/image";
import Button from "../button";
import { violao, teclado } from "./data";
import InstrumentsItem from "./InstrumentsItem";



const InstrumentItemCard = ({position, instrumento}) => {

   
  return (
    <>
      <div className="mt-4 cursor-pointer">
          <button
            onClick={() => {
              console.log("aqui vai mandar as info pra pagina");
            }}
          >
            <Image
              src={instrumento[position].image}
              alt={instrumento[position].nome}
              width={300}
              height={200}
              objectFit="contain"
              className="rounded-3xl"
            />
          </button>
          <h3 className="mt-5 text-2xl font-bold text-[#C7A315]">
            {instrumento[position].namecard}
          </h3>
          <div className="m-5 flex items-baseline justify-center gap-4">
            <p className="text-2xl text-slate-400 line-through">
              R${instrumento[position].oldPrice}
            </p>
            <p className="text-4xl font-semibold text-[#C7A315]">
              R${instrumento[position].newPrice}
            </p>
          </div>
        </div>
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
