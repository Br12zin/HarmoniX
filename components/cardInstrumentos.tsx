"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import { Star } from "lucide-react";

import { useRouter } from "next/navigation";

const CardInstrumentos = (props) => {
  const router = useRouter();

  const handleEnviar = () => {
    localStorage.setItem("position", props.id);
    if (typeof window !== "undefined") {
      router.push(`/pages/Carrinho`);
    }
  };

  return (
    <>
      <div className="mx-2 my-4 rounded-2xl border-2 border-[#707070]/30 bg-white shadow-lg transition-all duration-100 ease-in-out hover:border-[#707070]/70">
        <div className="flex flex-col py-4 font-medium">
          <Link href={`/pages/Instrumento/${props.id}`}>
            <div className="flex flex-col items-center">
              <Image
                src={props.image}
                width={200}
                height={200}
                alt=""
                className="h-[150px] w-[150px]"
              />
              <div className="text-yellow-400">
                <p className="mt-5 flex">
                  <Star className="size-4" />
                  <Star className="size-4" />
                  <Star className="size-4" />
                  <Star className="size-4" />
                  <Star className="size-4" />
                </p>
              </div>
              <h2 className="py-1 text-lg text-[#C7A315]">{props.namecard}</h2>
              <span className="text-xs font-medium text-gray-500 line-through">
                R${props.oldPrice}
              </span>
              <p className="text-2xl text-[#C7A315]">R${props.newPrice}</p>
            </div>
          </Link>
          <Button onClick={handleEnviar}>
            <span>Comprar</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardInstrumentos;
