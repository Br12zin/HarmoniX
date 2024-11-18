import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const CardInstrumentos = (props) => {
  return (
    <>
      <div className="h mx-2 my-4 w-[17.5625rem] rounded-2xl border-2 border-[#707070]/30 bg-white shadow-lg transition-all duration-100 ease-in-out hover:border-[#707070]/70">
        <Link href="#" className="flex flex-col items-center py-4 font-medium">
          <div className="flex flex-col items-center">
            <Image src="/img/gibsonViolao.jpg" width={90} height={100} alt="" />
            <h2 className="py-1 text-lg">O Violão</h2>
            <span className=" text-xs font-medium line-through">
              R$1500
            </span>
            <p className="text-2xl text-[#C7A315]">R$999,99</p>
          </div>
          <Button>
            <span className="">Comprar</span>
          </Button>
        </Link>
      </div>
    </>
  );
};

export default CardInstrumentos;
