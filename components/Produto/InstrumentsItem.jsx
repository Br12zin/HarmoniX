"use client";

import Image from "next/image";
import { CreditCard, Star, Barcode } from "lucide-react";
import Input from "@/components/Input";
import Button from "@/components/button";
import { violao } from "./data";

export default function InstrumentsItem() {
  const position = 1;
  const instrumento = violao;
  const parcelado = (parseFloat(instrumento[position].newPrice) / 10).toFixed(
    2,
  );

  return (
    <>
      <div className="mt-14">
        <div className="container mx-auto flex">
          <div className="mx-auto max-w-[50em]">
            <Image
              src={instrumento[position].image}
              alt={instrumento[position].nome}
              width={550}
              height={700}
              className="rounded-2xl border-2 border-slate-400 border-opacity-45 bg-white px-8"
            />
          </div>
          <div className="mx-auto max-w-[35em] border-l-2 border-[#C7A315] border-opacity-50 ps-10">
            <h1 className="font-quiche text-wrap text-4xl font-bold text-[#C7A315]">
              {instrumento[position].nome}
            </h1>
            <div className="text-yellow-400">
              <p className="mt-5 flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </p>
            </div>
            <h3 className="mt-5 text-xl text-slate-400 line-through">
              R$ {instrumento[position].oldPrice}
            </h3>
            <div className="box-border flex flex-wrap items-baseline">
              <h2 className="mt-5 text-3xl font-semibold text-[#C7A315]">
                R$ {instrumento[position].newPrice}
              </h2>
              <p className="ms-2 font-bold text-slate-500">à vista</p>
              <p className="text-green-400">
                (com 10% de desconto no Pix / Boleto Bancário / 1x no Cartão de
                Crédito)
              </p>
              <p className="text-slate-500">
                {`ou em 10x de R$${parcelado} sem juros no cartão`}
              </p>
            </div>
            <div className="flex">
              <CreditCard />
              <p className="mx-2"> Cartão </p>
              <Barcode />
              <p className="mx-2"> Boleto </p>
            </div>
            <div className="flex items-center">
              <Input className="m-0" />
              <Button btn="mt-0 mb-5 ms-4">Calcular Frete</Button>
            </div>

            <Button
              btn="mt-0 mb-3 ms-4 w-screen text-xl font-bold mx-auto"
              caminho="/pages/Carrinho"
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-10 mt-20 border-t-2 border-[#C7A315]">
        <h1 className="mt-4 text-center text-4xl text-[#C7A315]"></h1>
        <div className="bg-gray-50 p-6 font-sans text-gray-900">
          <h1 className="mb-4 text-2xl font-bold">
            {instrumento[position].nome}
          </h1>
          <p className="mb-4">{instrumento[position].informacoes}</p>
          <h2 className="mb-2 mt-6 text-xl font-semibold">
            Especificações Técnicas
          </h2>
          <ul className="mb-4 space-y-1">
            <li>
              <span className="font-medium">Marca:</span>{" "}
              {instrumento[position].marca}
            </li>
            <li>
              <span className="font-medium">Modelo:</span>{" "}
              {instrumento[position].modelo}
            </li>
            <li>
              <span className="font-medium">Tampo:</span>{" "}
              {instrumento[position].tampo}
            </li>
          </ul>
          <h2 className="mb-2 mt-6 text-xl font-semibold">Sobre a Marca</h2>
          <p className="mb-4">{instrumento[position].sobreMarca}</p>
        </div>
      </div>
    </>
  );
}
