"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { formatter } from "@/app/utils/formatadorDeMoeda";

interface CardInstrumentosProps {
  id: number;
  image: string;
  namecard: string;
  oldPrice: string;
  newPrice: string;
}

const CardInstrumentos = (props: CardInstrumentosProps) => {
  const router = useRouter();

  const handleEnviar = () => {
    localStorage.setItem("position", props.id.toString());
    if (typeof window !== "undefined") {
      router.push(`/pages/Carrinho`);
    }
  };

  return (
    <div className="mx-2 my-4 flex h-[380px] w-full max-w-[300px] flex-col justify-between rounded-2xl border-2 border-[#707070]/30 bg-white shadow-lg transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-[#707070]/70 hover:shadow-xl">
      <Link href={`/pages/Instrumento/${props.id}`}>
        <div className="flex flex-col items-center px-4 py-4">
          <Image
            src={`http://localhost:8080/produtos/imagens/${props.image}`}
            width={150}
            height={150}
            alt={props.namecard}
            className="h-[150px] w-[150px] object-contain"
          />
          <div className="mt-4 flex text-yellow-400">
            <Star className="size-4" />
            <Star className="size-4" />
            <Star className="size-4" />
            <Star className="size-4" />
            <Star className="size-4" />
          </div>
          <h2 className="w-48 truncate py-1 text-center text-lg text-[#C7A315]">
            {props.namecard}
          </h2>
          <span className="text-xs font-medium text-gray-500 line-through">
            {formatter.format(Number(props.oldPrice))}
          </span>
          <p className="text-2xl font-bold text-[#C7A315]">
            {formatter.format(Number(props.newPrice))}
          </p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button
          onClick={handleEnviar}
          className="w-full rounded-lg bg-[#C7A315] py-2 font-medium text-white transition-all duration-150 hover:bg-[#b28f13]"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
};

export default CardInstrumentos;
